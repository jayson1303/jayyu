/**
 * JAYRYU — Technology Company & Digital Development Agency
 * Main Interactive Controller: Navigation, Modals, Portfolio Filters, and WA Links
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Controller
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a, button');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 1.1 Client and credential marquee details
  const credentialData = {
    apple: {
      logo: 'Apple', image: 'assets/images/client-logos/apple.png', organization: 'Apple WebKit', title: 'CVE-2026-43735', year: '2026',
      category: 'Security Research / CVE',
      description: 'Responsible disclosure terkait kerentanan keamanan pada Apple WebKit.'
    },
    nasa: {
      logo: 'NASA', image: 'assets/images/client-logos/nasa.png', organization: 'NASA', title: 'NASA Letter of Appreciation', year: '2026',
      category: 'Vulnerability Disclosure',
      description: 'Recognition terkait responsible disclosure kerentanan keamanan.'
    },
    ferrari: {
      logo: 'Ferrari', image: 'assets/images/client-logos/ferrari.png', organization: 'Ferrari', title: 'Ferrari Hall of Fame', year: '2026',
      category: 'Responsible Disclosure',
      description: 'Recognition terkait penemuan dan pelaporan kerentanan keamanan pada sistem digital Ferrari.'
    },
    blackberry: {
      logo: 'BlackBerry', image: 'assets/images/client-logos/blackberry.png', organization: 'BlackBerry', title: 'BlackBerry Hall of Fame', year: '2026',
      category: 'Security Recognition',
      description: 'Recognition terkait penemuan dan pelaporan kerentanan keamanan pada produk BlackBerry.'
    },
    belgium: {
      logo: 'Belgium Government', organization: 'Belgium Government', title: 'Belgium Government Hall of Fame', year: '2026',
      category: 'Responsible Disclosure',
      description: 'Recognition terkait responsible disclosure kerentanan keamanan pada sistem pemerintah Belgia.'
    },
    itb: {
      logo: 'ITB', organization: 'Institut Teknologi Bandung', title: 'ITB Security Disclosure', year: '2026',
      category: 'Security Disclosure',
      description: 'Recognition terkait responsible disclosure kerentanan keamanan pada infrastruktur digital ITB.'
    },
    hackerone: {
      logo: 'HackerOne', organization: 'HackerOne', title: 'Bug Bounty Hunter Certification', year: '2023',
      category: 'Certification',
      description: 'Bug Bounty Hunter Certification dari HackerOne.'
    },
    yeswehack: {
      logo: 'YesWeHack', organization: 'YesWeHack', title: 'Bug Bounty Hunter Certification', year: '2023',
      category: 'Certification',
      description: 'Bug Bounty Hunter Certification dari YesWeHack.'
    },
    bali: {
      logo: 'Provinsi Bali', organization: 'Provinsi Bali', title: 'Security Assessment', year: '2025',
      category: 'Security Assessment',
      description: 'Recognition terkait responsible disclosure kerentanan keamanan pada infrastruktur Pemerintah Provinsi Bali.'
    },
    bekasi: {
      logo: 'Pemkot Bekasi', image: 'assets/images/client-logos/pemkot%20dan%20lain%20lain.png', organization: 'Pemkot Bekasi', title: 'Security Assessment', year: '2025',
      category: 'Security Assessment',
      description: 'Recognition terkait security vulnerability assessment pada sistem Pemerintah Kota Bekasi.'
    },
    diy: {
      logo: 'Provinsi DIY', organization: 'Provinsi DIY', title: 'Security Assessment', year: '2025',
      category: 'Security Assessment',
      description: 'Recognition terkait penemuan dan responsible disclosure kerentanan keamanan pada sistem Pemerintah Provinsi DIY.'
    }
  };

  const credentialModal = document.getElementById('credentialModal');
  const credentialMarquee = document.querySelector('#clients .logo-marquee');
  if (credentialModal && credentialMarquee) {
    const dialog = credentialModal.querySelector('.credential-dialog');
    const closeButton = credentialModal.querySelector('.credential-close');
    const modalLogo = document.getElementById('credentialLogo');
    const modalLogoImage = document.getElementById('credentialLogoImage');
    const modalLogoName = modalLogo.querySelector('.logo-name');
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

    credentialMarquee.addEventListener('click', (event) => {
      const logoButton = event.target.closest('.client-logo[data-credential]');
      if (!logoButton || !credentialMarquee.contains(logoButton)) return;
      const detail = credentialData[logoButton.dataset.credential];
      if (!detail) return;

      window.clearTimeout(closeTimer);
      returnFocusTo = logoButton;
      previousBodyOverflow = document.body.style.overflow;
      const logoStyle = [...logoButton.classList].find(name => name.startsWith('logo-')) || '';
      modalLogo.className = `credential-logo ${logoStyle}`;
      if (detail.image) {
        modalLogoImage.src = detail.image;
        modalLogoImage.alt = detail.logo;
        modalLogoImage.classList.remove('hidden');
        modalLogoName.classList.add('hidden');
      } else {
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
      closeButton.focus();
    });

    credentialModal.addEventListener('click', (event) => {
      if (event.target.closest('[data-credential-close]')) closeCredentialModal();
    });
    document.addEventListener('keydown', (event) => {
      if (credentialModal.hidden) return;
      if (event.key === 'Escape') closeCredentialModal();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButton.focus();
      }
    });
  }

  // 2. Project Data for Interactive Detail Modal
  const projectDatabase = {
    'bintang-motor': {
      name: 'Bintang Motor',
      category: 'Website Development',
      badge: 'Sales & Catalog Website',
      shortDesc: 'A high-converting digital catalog designed to help automotive sales teams present vehicles, simulate credit installments, and connect with customers.',
      image: 'assets/images/mockup_motor.jpg',
      price: 'Starting from Rp500.000',
      priceNote: 'Final price depends on features and project requirements.',
      features: [
        'Interactive Product Catalog & Color Variants',
        'Automatic Credit & DP Installment Simulator',
        'Instant WhatsApp Direct Connection on Every Unit',
        'Mobile-Optimized Responsive Experience'
      ],
      tech: ['PHP / Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript']
    },
    'premier-auto': {
      name: 'Premier Automotive',
      category: 'Website Development',
      badge: 'Sales & Catalog Website',
      shortDesc: 'A digital showroom catalog engineered for dealerships to display new and pre-owned luxury cars with integrated online test drive booking.',
      image: 'assets/images/mockup_mobil.jpg',
      price: 'Starting from Rp500.000',
      priceNote: 'Final price depends on features and project requirements.',
      features: [
        'Vehicle Showcase with Full Specifications',
        'Leasing DP & Monthly Installment Calculator',
        'Online Test Drive Booking Form',
        'Instant Sales Agent WhatsApp Routing'
      ],
      tech: ['Laravel', 'MySQL', 'JavaScript ES6', 'Tailwind CSS']
    },
    'luxe-living': {
      name: 'Luxe Living — Serene Valley',
      category: 'Website Development',
      badge: 'Property & Housing Catalog',
      shortDesc: 'A property portfolio and residential cluster showcase featuring interactive masterplans, unit floorplans, and direct mortgage (KPR) calculations.',
      image: 'assets/images/mockup_perumahan.jpg',
      price: 'Starting from Rp500.000',
      priceNote: 'Final price depends on features and project requirements.',
      features: [
        'Masterplan & Cluster Unit Showcase',
        'Architectural Floorplans & Technical Specs',
        'Bank Mortgage (KPR) Estimation Tool',
        'Digital Brochure PDF Download & WhatsApp Booking'
      ],
      tech: ['PHP 8', 'MySQL', 'Tailwind CSS', 'Alpine.js']
    },
    'kopi-rasa': {
      name: 'Kopi & Rasa Roastery',
      category: 'Website Development',
      badge: 'Commercial Catalog & UMKM',
      shortDesc: 'A modern artisan coffee catalog and retail web platform built to display specialty beans and enable direct orders via WhatsApp checkout.',
      image: 'assets/images/mockup_umkm.jpg',
      price: 'Starting from Rp700.000',
      priceNote: 'Final price depends on features and project requirements.',
      features: [
        'Curated Artisan Product Catalog',
        'Direct WhatsApp Order Cart Integration',
        'Interactive Google Maps Store Locator',
        'Customer Testimonials & Rating System'
      ],
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS']
    },
    'nexus-erp': {
      name: 'Nexus Logistics & ERP',
      category: 'Web Application',
      badge: 'Enterprise Web Application',
      shortDesc: 'A custom cloud-based operations dashboard designed to manage inventory, warehouse dispatch, weekly shipment statuses, and operational analytics.',
      image: 'assets/images/mockup_webapp.jpg',
      price: 'Custom Project',
      priceNote: 'Scope and timeline tailored to business workflow specifications.',
      features: [
        'Real-time Warehouse Inventory Monitoring',
        'Order Dispatch & Shipment Tracking Flow',
        'Data Analytics & Performance Reporting Charts',
        'Role-Based Multi-User Access Security'
      ],
      tech: ['Laravel REST API', 'MySQL Database', 'Vue / Modern JS', 'Tailwind CSS']
    },
    'aura-mobile': {
      name: 'Aura Mobile Commerce',
      category: 'Mobile App Development',
      badge: 'Cross-Platform Mobile App',
      shortDesc: 'A sleek, high-performance mobile application for iOS and Android featuring live shipment transit tracking, in-app catalog, and push alerts.',
      image: 'assets/images/mockup_mobileapp.jpg',
      price: 'Custom Project',
      priceNote: 'Architecture and features designed around your business needs.',
      features: [
        'Cross-Platform iOS & Android Architecture',
        'Live Map & Order Status Transit Tracking',
        'Instant Push Notifications & Updates',
        'Fast Native UI with Offline Caching'
      ],
      tech: ['Flutter / React Native', 'RESTful API', 'Node.js / Laravel', 'PostgreSQL']
    }
  };

  // 3. Team Database for Interactive Profile Modal
  const teamDatabase = {
    'nazar': {
      name: 'Nazar Alfarija',
      role: 'Co-Founder & Web Developer',
      image: 'profil pendiri/Nazar Alfarija.jpeg',
      bio: 'Web development, system architecture, and digital solutions.',
      details: 'Universitas Bina Sarana Informatika. Specializes in web system architecture, backend logic, relational databases, and performance optimization to ensure platforms run fast, securely, and reliably.',
      focus: ['Web Development', 'System Development', 'Database', 'Digital Solutions'],
      waLink: 'https://wa.me/62895365509303?text=Halo%20Nazar,%20saya%20ingin%20konsultasi%20mengenai%20pengembangan%20sistem%20dan%20website%20di%20JAYRYU.'
    },
    'yusuf': {
      name: 'Yusuf Ramdany',
      role: 'Co-Founder & Marketing',
      image: 'profil pendiri/Yusuf Ramdany.jpeg',
      bio: 'Digital marketing, client communication, and business development.',
      details: 'STISIP Widyapuri Mandiri. Leads marketing strategy, client consultations, market alignment, and business development to ensure each digital solution achieves tangible commercial impact.',
      focus: ['Digital Marketing', 'Client Communication', 'Business Development'],
      waLink: 'https://wa.me/6283163895963?text=Halo%20Yusuf,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20proyek%20dan%20solusi%20digital%20JAYRYU.'
    },
    'rayhan': {
      name: 'Rayhan',
      role: 'Founder & Lead Developer',
      website: 'https://rhyru9.xyz/',
      image: '',
      bio: 'Founder utama JAYRYU, memimpin pengembangan web, aplikasi, dan arsitektur solusi digital.',
      details: 'Universitas Bina Sarana Informatika. Memimpin standar teknis dan pengembangan produk; berpengalaman dalam web, aplikasi mobile, integrasi API, serta pemecahan masalah sistem.',
      focus: ['Web Development', 'Mobile Applications', 'API Integration', 'Bug Hunting'],
      waLink: 'https://wa.me/62895365509303?text=Halo%20Tim%20JAYRYU,%20saya%20ingin%20konsultasi%20tentang%20Web%20%26%20App%20Development.'
    }
  };

  // 4. Project Modal Global Functions
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');

  window.openProjectModal = function(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !projectModal) return;

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
    featuresList.innerHTML = data.features.map(f => `
      <li class="flex items-start gap-2.5 text-slate-700 text-sm">
        <svg class="w-4 h-4 text-blue-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    // Render Tech Pills
    const techContainer = document.getElementById('pmTech');
    techContainer.innerHTML = data.tech.map(t => `
      <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">${t}</span>
    `).join('');

    // Setup CTA button
    const ctaBtn = document.getElementById('pmCtaBtn');
    ctaBtn.onclick = () => {
      projectModal.classList.add('hidden');
      openConsultModal(`Proyek Serupa: ${data.name} (${data.category})`);
    };

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

  // 5. Team Profile Modal Functions
  const teamModal = document.getElementById('teamModal');
  const closeTeamModal = document.getElementById('closeTeamModal');

  window.openTeamModal = function(memberKey) {
    const member = teamDatabase[memberKey];
    if (!member || !teamModal) return;

    const tmImage = document.getElementById('tmImage');
    tmImage.style.display = member.image ? '' : 'none';
    tmImage.parentElement.classList.toggle('founder-placeholder', !member.image);
    tmImage.parentElement.setAttribute('data-initial', member.image ? '' : member.name.charAt(0));
    if (member.image) tmImage.src = member.image;
    tmImage.alt = member.name;
    document.getElementById('tmName').textContent = member.name;
    document.getElementById('tmRole').textContent = member.role;
    document.getElementById('tmBio').textContent = member.bio;
    document.getElementById('tmDetails').textContent = member.details;
    const tmWebsite = document.getElementById('tmWebsite');
    tmWebsite.classList.toggle('hidden', !member.website);
    if (member.website) tmWebsite.href = member.website;

    // Render Focus Pills
    const focusContainer = document.getElementById('tmFocus');
    focusContainer.innerHTML = member.focus.map(f => `
      <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">${f}</span>
    `).join('');

    // Setup direct WA
    const tmWaBtn = document.getElementById('tmWaBtn');
    tmWaBtn.href = member.waLink;

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

  // 6. Portfolio Filtering
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
    const projectForService = { website: 'bintang-motor', mobileapp: 'aura-mobile', webapp: 'nexus-erp' };
    const project = projectDatabase[projectForService[filterCategory] || 'bintang-motor'];
    if (project) {
      project.price = 'Mulai Rp500.000';
      project.priceNote = 'Harga akhir menyesuaikan fitur dan kebutuhan proyek.';
      openProjectModal(projectForService[filterCategory] || 'bintang-motor');
    }
  };

  // 7. Unified Consultation WhatsApp Modal
  const consultModal = document.getElementById('consultModal');
  const closeConsultModal = document.getElementById('closeConsultModal');
  const consultContext = document.getElementById('consultContext');
  const consultNazarLink = document.getElementById('consultNazarLink');
  const consultYusufLink = document.getElementById('consultYusufLink');

  window.openConsultModal = function(subject) {
    const topic = subject || 'Solusi Digital & Web Development JAYRYU';
    const msg = encodeURIComponent(`Halo Tim JAYRYU, saya tertarik dan ingin berkonsultasi mengenai: "${topic}". Mohon informasi dan rekomendasi solusi terbaik.`);

    if (consultContext) {
      consultContext.textContent = topic;
    }
    if (consultNazarLink) {
      consultNazarLink.href = `https://wa.me/62895365509303?text=${msg}`;
    }
    if (consultYusufLink) {
      consultYusufLink.href = `https://wa.me/6283163895963?text=${msg}`;
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

  // 8. Stats Counter (Verified Figures Only)
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
});
