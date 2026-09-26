/**
 * JAYYU - Interactive Landing Page Scripts
 * Direct WhatsApp Links, Sales Catalog Switcher, Image Lightbox, and Stats Counter
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Floating WhatsApp Widget Popover
  const waFloatingBtn = document.getElementById('waFloatingBtn');
  const waModal = document.getElementById('waModal');
  const closeWaModal = document.getElementById('closeWaModal');

  if (waFloatingBtn && waModal) {
    waFloatingBtn.addEventListener('click', () => {
      waModal.classList.toggle('hidden');
    });
  }

  if (closeWaModal && waModal) {
    closeWaModal.addEventListener('click', () => {
      waModal.classList.add('hidden');
    });
  }

  // Close WA Modal on outside click
  window.addEventListener('click', (e) => {
    if (waModal && !waModal.classList.contains('hidden')) {
      if (!waModal.contains(e.target) && !waFloatingBtn.contains(e.target) && !e.target.closest('.wa-trigger-btn')) {
        waModal.classList.add('hidden');
      }
    }
  });

  // Sales Catalog Tabs (Motor, Mobil, Perumahan)
  const salesTabs = {
    motor: {
      title: "Katalog Sales Motor (Dealer & Penjualan Roda Dua)",
      badge: "Sangat Cocok untuk Sales Motor Honda, Yamaha, Kawasaki, dll.",
      desc: "Solusi website katalog interaktif untuk sales motor. Tampilkan varian warna motor terbaru, rincian harga OTR, promo uang muka (DP minim), dan simulasi angsuran kredit interaktif yang langsung terhubung ke WhatsApp Anda.",
      img: "assets/images/mockup_motor.jpg",
      nazarWa: "https://wa.me/62895365509303?text=Halo%20Admin%20Nazar,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Motor.",
      yusufWa: "https://wa.me/6283163895963?text=Halo%20Admin%20Yusuf,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Motor.",
      features: [
        "Galeri Foto Unit HD & Pilihan Varian Warna",
        "Kalkulator Simulasi Kredit & Angsuran Otomatis",
        "Tombol Cepat 'Chat Sales via WhatsApp' di Setiap Unit",
        "Formulir Pengajuan Syarat Kredit Cepat",
        "Brosur Digital Download PDF"
      ]
    },
    mobil: {
      title: "Katalog Sales Mobil (Dealer Resmi & Mobil Baru/Bekas)",
      badge: "Sangat Cocok untuk Sales Toyota, Daihatsu, Mitsubishi, Honda, dll.",
      desc: "Tingkatkan closing penjualan mobil dengan website katalog mewah dan meyakinkan. Dilengkapi form booking test drive, tabel simulasi DP dan tenor kredit, serta review fitur spesifikasi mobil lengkap.",
      img: "assets/images/mockup_mobil.jpg",
      nazarWa: "https://wa.me/62895365509303?text=Halo%20Admin%20Nazar,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Mobil.",
      yusufWa: "https://wa.me/6283163895963?text=Halo%20Admin%20Yusuf,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Mobil.",
      features: [
        "Katalog Showcase Sedan, SUV, MPV, & Commercial",
        "Simulasi DP Rendah & Perhitungan Tenor Kredit",
        "Formulir Booking Jadwal Test Drive Online",
        "Tombol Konsultasi Penawaran Khusus ke WhatsApp Sales",
        "Dukungan Integrasi Google Ads & SEO Lokal"
      ]
    },
    perumahan: {
      title: "Katalog Sales Perumahan & Properti (Cluster & Developer)",
      badge: "Sangat Cocok untuk Agen Properti, Marketing Cluster & Developer",
      desc: "Website portofolio dan katalog perumahan modern. Tampilkan foto rumah contoh, masterplan/siteplan cluster, denah layout, simulasi KPR bank, serta tombol unduh e-brosur untuk calon pembeli rumah impian.",
      img: "assets/images/mockup_perumahan.jpg",
      nazarWa: "https://wa.me/62895365509303?text=Halo%20Admin%20Nazar,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Perumahan.",
      yusufWa: "https://wa.me/6283163895963?text=Halo%20Admin%20Yusuf,%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Sales%20Perumahan.",
      features: [
        "Tampilan Cluster & Tipe Unit (36, 45, 60, dll)",
        "Denah Rumah, Siteplan & Spesifikasi Teknis",
        "Simulasi KPR Bank & Tabel Estimasi Angsuran",
        "Tombol Unduh E-Brosur & Pricelist Resmi",
        "WhatsApp Direct Booking & Jadwal Survei Lokasi"
      ]
    }
  };

  const tabBtns = document.querySelectorAll('.tab-btn');
  const salesTitle = document.getElementById('salesTitle');
  const salesBadge = document.getElementById('salesBadge');
  const salesDesc = document.getElementById('salesDesc');
  const salesImg = document.getElementById('salesImg');
  const salesFeatures = document.getElementById('salesFeatures');
  const salesNazarLink = document.getElementById('salesNazarLink');
  const salesYusufLink = document.getElementById('salesYusufLink');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      if (!type || !salesTabs[type]) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = salesTabs[type];
      if (salesTitle) salesTitle.textContent = data.title;
      if (salesBadge) salesBadge.textContent = data.badge;
      if (salesDesc) salesDesc.textContent = data.desc;
      if (salesImg) {
        salesImg.src = data.img;
        salesImg.alt = data.title;
      }
      if (salesNazarLink) salesNazarLink.href = data.nazarWa;
      if (salesYusufLink) salesYusufLink.href = data.yusufWa;

      if (salesFeatures) {
        salesFeatures.innerHTML = data.features.map(f => `
          <li class="flex items-start gap-2.5 text-slate-700 text-sm">
            <svg class="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${f}</span>
          </li>
        `).join('');
      }
    });
  });

  // Lightbox Modal for Image Preview
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const closeLightbox = document.getElementById('closeLightbox');

  window.openLightbox = function(src, title) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title || "Pratinjau Gambar";
      lightboxModal.classList.remove('hidden');
    }
  };

  if (closeLightbox && lightboxModal) {
    closeLightbox.addEventListener('click', () => {
      lightboxModal.classList.add('hidden');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.closest('#closeLightbox')) {
        lightboxModal.classList.add('hidden');
      }
    });
  }

  // WhatsApp Dialog Helper
  window.openWaPicker = function(packageName) {
    const pkg = packageName || "Layanan Website JAYYU";
    const waNazarLink = document.getElementById('waModalNazarLink');
    const waYusufLink = document.getElementById('waModalYusufLink');
    const modalContext = document.getElementById('waModalContext');

    const msg = encodeURIComponent(`Halo Tim JAYYU, saya tertarik dan ingin konsultasi mengenai: "${pkg}". Mohon informasi lebih lanjut.`);

    if (waNazarLink) {
      waNazarLink.href = `https://wa.me/62895365509303?text=${msg}`;
    }
    if (waYusufLink) {
      waYusufLink.href = `https://wa.me/6283163895963?text=${msg}`;
    }
    if (modalContext) {
      modalContext.textContent = `Paket: ${pkg}`;
    }

    if (waModal) {
      waModal.classList.remove('hidden');
    }
  };

  // Stats Counter Animation
  const counters = document.querySelectorAll('.stat-counter');
  let counterStarted = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = Math.max(1, target / 25);

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count) + suffix;
          setTimeout(updateCount, 35);
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
