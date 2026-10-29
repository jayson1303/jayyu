/**
 * JAYRYU — Technology Company & Digital Development Agency
 * Main Interactive Controller: Navigation, Modals, Portfolio Filters, i18n Language Toggle, and WA Links
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Language / i18n Controller
  let currentLang = (window.JAYRYU_I18N && window.JAYRYU_I18N.getSavedLang()) || 'id';
  let currentActiveServiceCat = 'web';
  let currentActiveProjectId = null;
  let currentActiveTeamKey = null;
  let currentActiveCredentialKey = null;
  let currentConsultSubject = '';

  // Render hero title with matching arched curve
  function renderHeroTitle(lang) {
    const heroTitle = document.getElementById('heroTitle');
    if (!heroTitle) return;

    const phrase = lang === 'en' ? 'Digital Solutions' : 'Solusi Digital';
    heroTitle.setAttribute('aria-label', phrase);

    const lettersOnly = phrase.replace(/\s+/g, '');
    const totalLetters = lettersOnly.length;

    let letterIndex = 0;
    const fragment = document.createDocumentFragment();

    Array.from(phrase).forEach((char) => {
      if (char === ' ') {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'hero-curve-space';
        spaceSpan.setAttribute('aria-hidden', 'true');
        fragment.appendChild(spaceSpan);
      } else {
        const span = document.createElement('span');
        span.className = 'hero-curve-letter';
        span.setAttribute('aria-hidden', 'true');
        span.textContent = char;

        const progress = totalLetters > 1 ? letterIndex / (totalLetters - 1) : 0.5;
        const centered = (progress - 0.5) * 2; // -1 to 1
        const distSq = centered * centered;

        const curveY = (0.34 - 0.45 * (1 - distSq)).toFixed(2);
        const arcY = (1.44 - 0.74 * distSq).toFixed(2);
        const arcX = (char.toLowerCase() === 'o' ? 0.78 : (1.04 - 0.16 * distSq)).toFixed(2);
        const delay = (letterIndex * 45);

        span.style.setProperty('--curve-y', `${curveY}em`);
        span.style.setProperty('--arc-x', arcX);
        span.style.setProperty('--arc-y', arcY);
        span.style.setProperty('--letter-delay', `${delay}ms`);

        fragment.appendChild(span);
        letterIndex++;
      }
    });

    heroTitle.replaceChildren(fragment);
  }

  // Update kinetic letter-by-letter section headings
  function updateKineticHeadings(lang) {
    if (!window.JAYRYU_I18N) return;
    const t = window.JAYRYU_I18N.translations[lang];
    if (!t) return;

    const headingTargets = [
      { selector: '#projectArchive .section-heading', text: t.archive_heading },
      { selector: '#about .section-heading', text: t.about_heading },
      { selector: '#technology .section-heading', text: t.tech_heading },
      { selector: '#contact h2', text: t.contact_heading }
    ];

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    headingTargets.forEach(({ selector, text }) => {
      const heading = document.querySelector(selector);
      if (!heading || !text) return;
      heading.setAttribute('aria-label', text);

      if ('IntersectionObserver' in window && !motionPreference.matches) {
        const fragment = document.createDocumentFragment();
        Array.from(text).forEach((character, index) => {
          const letter = document.createElement('span');
          letter.className = character === ' ' ? 'scroll-heading-space' : 'scroll-heading-letter';
          letter.textContent = character;
          letter.style.setProperty('--letter-delay', `${index * (window.innerWidth < 768 ? 16 : 24)}ms`);
          letter.setAttribute('aria-hidden', 'true');
          fragment.appendChild(letter);
        });
        heading.replaceChildren(fragment);
      } else {
        heading.textContent = text;
      }
    });
  }

  // Apply language across DOM and active modals
  function applyLanguage(lang) {
    if (!window.JAYRYU_I18N) return;
    const t = window.JAYRYU_I18N.translations[lang];
    if (!t) return;

    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t.page_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.page_description);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update all elements with data-i18n-aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    // Update language switchers active state
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
      const match = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', String(match));
    });

    // Hero title curve
    renderHeroTitle(lang);

    // Kinetic headings
    updateKineticHeadings(lang);

    // If services drawer is open, refresh detail
    if (servicesPanel?.classList.contains('is-open') && currentActiveServiceCat) {
      const details = window.JAYRYU_I18N.serviceDetails[lang];
      const detail = details[currentActiveServiceCat] || details.web;
      if (serviceTitle) serviceTitle.textContent = detail.title;
      if (serviceDescription) serviceDescription.textContent = detail.description;
    }

    // If project modal is open, re-render it
    if (projectModal && !projectModal.classList.contains('hidden') && currentActiveProjectId) {
      window.openProjectModal(currentActiveProjectId);
    }

    // If team modal is open, re-render it
    if (teamModal && !teamModal.classList.contains('hidden') && currentActiveTeamKey) {
      window.openTeamModal(currentActiveTeamKey);
    }

    // If credential modal is open, re-render it
    if (credentialModal && !credentialModal.hidden && currentActiveCredentialKey) {
      const cred = window.JAYRYU_I18N.credentialData[lang][currentActiveCredentialKey];
      if (cred) {
        document.getElementById('credentialCategory').textContent = cred.category;
        document.getElementById('credentialDescription').textContent = cred.description;
        document.getElementById('credentialTitle').textContent = cred.title;
      }
    }

    // If consult modal is open, re-render it
    if (consultModal && !consultModal.classList.contains('hidden')) {
      window.openConsultModal(currentConsultSubject);
    }
  }

  // Bind click on all language switcher buttons
  document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        currentLang = targetLang;
        if (window.JAYRYU_I18N) window.JAYRYU_I18N.setSavedLang(targetLang);
        applyLanguage(currentLang);
      }
    });
  });

  // Services open as a left-side drawer so the page keeps its editorial flow.
  const servicesPanel = document.getElementById('services');
  const servicesBackdrop = document.getElementById('servicesBackdrop');
  const servicesCloseBtn = document.getElementById('servicesCloseBtn');
  const serviceTitle = document.getElementById('serviceDetailTitle');
  const serviceDescription = document.getElementById('serviceDetailDescription');
  const serviceCategoryButtons = document.querySelectorAll('[data-service-category]');

  const openServices = () => {
    if (!servicesPanel || !servicesBackdrop) return;
    servicesPanel.classList.add('is-open');
    servicesPanel.setAttribute('aria-hidden', 'false');
    servicesBackdrop.hidden = false;
    document.body.classList.add('services-open');
  };

  const closeServices = () => {
    if (!servicesPanel || !servicesBackdrop) return;
    servicesPanel.classList.remove('is-open');
    servicesPanel.setAttribute('aria-hidden', 'true');
    serviceCategoryButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    document.body.classList.remove('services-open');
    window.setTimeout(() => {
      if (!servicesPanel.classList.contains('is-open')) servicesBackdrop.hidden = true;
    }, 340);
  };

  const openServiceCategory = category => {
    currentActiveServiceCat = category;
    const details = (window.JAYRYU_I18N && window.JAYRYU_I18N.serviceDetails[currentLang]) || {};
    const detail = details[category] || details.web || { title: 'Website Development', description: '' };
    if (serviceTitle) serviceTitle.textContent = detail.title;
    if (serviceDescription) serviceDescription.textContent = detail.description;
    serviceCategoryButtons.forEach(button => {
      const selected = button.dataset.serviceCategory === category;
      button.setAttribute('aria-expanded', String(selected));
      button.classList.toggle('is-active', selected);
    });
    openServices();
  };

  serviceCategoryButtons.forEach(button => {
    button.addEventListener('click', () => openServiceCategory(button.dataset.serviceCategory));
  });
  servicesCloseBtn?.addEventListener('click', closeServices);
  servicesBackdrop?.addEventListener('click', closeServices);
  servicesPanel?.querySelector('.service-detail-cta')?.addEventListener('click', closeServices);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && servicesPanel?.classList.contains('is-open')) closeServices();
  });

  // Scroll reveals move content from alternating directions
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !motionPreference.matches) {
    const revealTargets = document.querySelectorAll(
      '#statsSection .grid > div, #clients > .text-center, #projectArchive .flex.flex-col > div:first-child, #projectArchive .trusted-demo-logo, #about > .max-w-7xl > .grid > div, #team .team-mini-card, #technology .max-w-2xl > *, #technology .grid > div, #contact .max-w-3xl > *, footer .grid > div'
    );
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

    revealTargets.forEach((element, index) => {
      const direction = index % 3 === 0 ? 'left' : index % 3 === 1 ? 'right' : 'up';
      element.classList.add('scroll-reveal');
      element.dataset.reveal = direction;
      element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
      revealObserver.observe(element);
    });
  }

  // 1. Mobile Menu Controller
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a, button:not(.lang-btn)');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 1.1 Client and credential marquee details
  const credentialModal = document.getElementById('credentialModal');
  const credentialMarquee = document.querySelector('#clients .logo-marquee');
  if (credentialModal && credentialMarquee) {
    const closeButton = credentialModal.querySelector('.credential-close');
    const modalLogo = document.getElementById('credentialLogo');
    const modalLogoImage = document.getElementById('credentialLogoImage');
    const modalLogoName = modalLogo?.querySelector('.logo-name');
    let returnFocusTo = null;
    let previousBodyOverflow = '';
    let closeTimer = null;

    const closeCredentialModal = () => {
      if (credentialModal.hidden) return;
      window.clearTimeout(closeTimer);
      credentialModal.classList.remove('is-open');
      credentialModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = previousBodyOverflow;
      closeTimer = window.setTimeout(() => {
        credentialModal.hidden = true;
        if (returnFocusTo?.isConnected) returnFocusTo.focus();
      }, 230);
    };

    const openCredentialModalByKey = (credKey, returnElement) => {
      const credData = (window.JAYRYU_I18N && window.JAYRYU_I18N.credentialData[currentLang]) || {};
      const detail = credData[credKey];
      if (!detail) return;

      currentActiveCredentialKey = credKey;
      window.clearTimeout(closeTimer);
      if (returnElement) returnFocusTo = returnElement;
      previousBodyOverflow = document.body.style.overflow;

      const logoStyle = returnElement ? [...returnElement.classList].find(name => name.startsWith('logo-')) || '' : '';
      if (modalLogo) modalLogo.className = `credential-logo ${logoStyle}`;

      if (detail.image && modalLogoImage && modalLogoName) {
        modalLogoImage.src = detail.image;
        modalLogoImage.alt = detail.logo;
        modalLogoImage.classList.remove('hidden');
        modalLogoName.classList.add('hidden');
      } else if (modalLogoImage && modalLogoName) {
        modalLogoImage.removeAttribute('src');
        modalLogoImage.alt = '';
        modalLogoImage.classList.add('hidden');
        modalLogoName.textContent = detail.logo;
        modalLogoName.classList.remove('hidden');
      }
      document.getElementById('credentialOrganization').textContent = detail.organization;
      document.getElementById('credentialCategory').textContent = detail.category;
      document.getElementById('credentialYear').textContent = detail.year;
      document.getElementById('credentialTitle').textContent = detail.title;
      document.getElementById('credentialDescription').textContent = detail.description;
      credentialModal.hidden = false;
      credentialModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      window.requestAnimationFrame(() => credentialModal.classList.add('is-open'));
      closeButton?.focus();
    };

    credentialMarquee.addEventListener('click', (event) => {
      const logoButton = event.target.closest('.client-logo[data-credential]');
      if (!logoButton || !credentialMarquee.contains(logoButton)) return;
      openCredentialModalByKey(logoButton.dataset.credential, logoButton);
    });

    credentialModal.addEventListener('click', (event) => {
      if (event.target.closest('[data-credential-close]')) closeCredentialModal();
    });
    document.addEventListener('keydown', (event) => {
      if (credentialModal.hidden) return;
      if (event.key === 'Escape') closeCredentialModal();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButton?.focus();
      }
    });
  }

  // 2. Project Modal Global Functions
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');

  window.openProjectModal = function(projectId) {
    const projectDb = (window.JAYRYU_I18N && window.JAYRYU_I18N.projectDatabase[currentLang]) || {};
    const data = projectDb[projectId];
    if (!data || !projectModal) return;

    currentActiveProjectId = projectId;
    const t = (window.JAYRYU_I18N && window.JAYRYU_I18N.translations[currentLang]) || {};

    document.getElementById('pmName').textContent = data.name;
    document.getElementById('pmBadge').textContent = data.badge;
    document.getElementById('pmCategory').textContent = data.category;
    document.getElementById('pmShortDesc').textContent = data.shortDesc;
    document.getElementById('pmImage').src = data.image;
    document.getElementById('pmImage').alt = data.name;
    document.getElementById('pmPrice').textContent = data.price;
    document.getElementById('pmPriceNote').textContent = data.priceNote;

    // Render Features
    const featuresList = document.getElementById('pmFeatures');
    if (featuresList) {
      featuresList.innerHTML = data.features.map(f => `
        <li class="flex items-start gap-2.5 text-slate-700 text-sm">
          <svg class="w-4 h-4 text-blue-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${f}</span>
        </li>
      `).join('');
    }

    // Render Tech Pills
    const techContainer = document.getElementById('pmTech');
    if (techContainer) {
      techContainer.innerHTML = data.tech.map(tch => `
        <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">${tch}</span>
      `).join('');
    }

    // Setup CTA button
    const ctaBtn = document.getElementById('pmCtaBtn');
    if (ctaBtn) {
      const ctaPrefix = t.cm_project_similar_prefix || 'Proyek Serupa: ';
      ctaBtn.onclick = () => {
        projectModal.classList.add('hidden');
        openConsultModal(`${ctaPrefix}${data.name} (${data.category})`);
      };
    }

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (closeProjectModal && projectModal) {
    closeProjectModal.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Team Profile Modal Functions
  const teamModal = document.getElementById('teamModal');
  const closeTeamModal = document.getElementById('closeTeamModal');

  window.openTeamModal = function(memberKey) {
    const teamDb = (window.JAYRYU_I18N && window.JAYRYU_I18N.teamDatabase[currentLang]) || {};
    const member = teamDb[memberKey];
    if (!member || !teamModal) return;

    currentActiveTeamKey = memberKey;

    const tmImage = document.getElementById('tmImage');
    if (tmImage) {
      tmImage.style.display = member.image ? '' : 'none';
      tmImage.parentElement.classList.toggle('founder-placeholder', !member.image);
      tmImage.parentElement.setAttribute('data-initial', member.image ? '' : (member.initial || member.name.charAt(0)));
      if (member.image) tmImage.src = member.image;
      tmImage.alt = member.name;
    }
    document.getElementById('tmName').textContent = member.name;
    document.getElementById('tmRole').textContent = member.role;
    document.getElementById('tmBio').textContent = member.bio;
    document.getElementById('tmDetails').textContent = member.details;
    const tmWebsite = document.getElementById('tmWebsite');
    if (tmWebsite) {
      tmWebsite.classList.toggle('hidden', !member.website);
      if (member.website) tmWebsite.href = member.website;
    }

    // Render Focus Pills
    const focusContainer = document.getElementById('tmFocus');
    if (focusContainer) {
      focusContainer.innerHTML = member.focus.map(f => `
        <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">${f}</span>
      `).join('');
    }

    // Setup direct WA
    const tmWaBtn = document.getElementById('tmWaBtn');
    if (tmWaBtn) {
      tmWaBtn.classList.toggle('hidden', !member.waLink);
      if (member.waLink) tmWaBtn.href = member.waLink;
    }

    teamModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (closeTeamModal && teamModal) {
    closeTeamModal.addEventListener('click', () => {
      teamModal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    teamModal.addEventListener('click', (e) => {
      if (e.target === teamModal) {
        teamModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // 4. Portfolio Filtering
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  window.filterProjects = function(category) {
    filterTabs.forEach(tab => {
      if (tab.getAttribute('data-filter') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    projectCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = '';
        card.classList.remove('opacity-0', 'scale-95');
      } else {
        card.style.display = 'none';
      }
    });
  };

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter') || 'all';
      filterProjects(filter);
    });
  });

  // Service click shortcut to project showcase with corresponding filter
  window.selectServiceAndFilter = function(filterCategory) {
    closeServices();
    const projectForService = { website: 'bintang-motor', mobileapp: 'aura-mobile', webapp: 'nexus-erp' };
    const pid = projectForService[filterCategory] || 'bintang-motor';
    openProjectModal(pid);
  };

  // 5. Unified Consultation WhatsApp Modal
  const consultModal = document.getElementById('consultModal');
  const closeConsultModal = document.getElementById('closeConsultModal');
  const consultContext = document.getElementById('consultContext');
  const consultNazarLink = document.getElementById('consultNazarLink');

  window.openConsultModal = function(subject) {
    currentConsultSubject = subject || '';
    const t = (window.JAYRYU_I18N && window.JAYRYU_I18N.translations[currentLang]) || {};
    const topic = subject || t.cm_default_topic || 'Solusi Digital & Web Development JAYRYU';
    const waPrefix = t.cm_wa_prefix || 'Halo Tim JAYRYU, saya tertarik dan ingin berkonsultasi mengenai: ';
    const waSuffix = t.cm_wa_suffix || '. Mohon informasi dan rekomendasi solusi terbaik.';
    const msg = encodeURIComponent(`${waPrefix}"${topic}"${waSuffix}`);

    if (consultContext) {
      consultContext.textContent = topic;
    }
    if (consultNazarLink) {
      consultNazarLink.href = `https://wa.me/62895365509303?text=${msg}`;
    }
    if (consultModal) {
      consultModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  if (closeConsultModal && consultModal) {
    closeConsultModal.addEventListener('click', () => {
      consultModal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    consultModal.addEventListener('click', (e) => {
      if (e.target === consultModal) {
        consultModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && !projectModal.classList.contains('hidden')) {
        projectModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
      if (teamModal && !teamModal.classList.contains('hidden')) {
        teamModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
      if (consultModal && !consultModal.classList.contains('hidden')) {
        consultModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });

  // 6. Stats Counter (Verified Figures Only)
  const counters = document.querySelectorAll('.stat-counter');
  let counterStarted = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = Math.max(1, target / 20);

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count) + suffix;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterStarted) {
        counterStarted = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Initialize Language on Page Load
  applyLanguage(currentLang);
});
