/**
 * JAYRYU — Bilingual Internationalization (i18n) Module
 * Supports: 'id' (Bahasa Indonesia) & 'en' (English)
 */

(function () {
  'use strict';

  const translations = {
    id: {
      page_title: 'JAYRYU — Pengembangan Web & Aplikasi | Solusi Digital',
      page_description: 'JAYRYU adalah tim teknologi dan agensi digital yang membangun website modern, aplikasi web, dan aplikasi mobile.',
      nav_brand_aria: 'JAYRYU — Beranda',
      nav_web: 'Web',
      nav_app: 'Aplikasi',
      nav_bug: 'Bug',
      nav_maintenance: 'Maintenance',
      nav_custom: 'Kustom',
      mobile_lang_title: 'Pilih Bahasa',
      mobile_menu_aria: 'Buka / Tutup Menu',

      // Hero
      hero_badge: 'AGENSI DIGITAL',
      hero_title: 'Solusi Digital',
      hero_desc: 'Bangun solusi digital yang memajukan bisnis Anda.',
      hero_cta: 'Mulai Proyek',

      // Stats
      stat_years: 'Tahun Berdiri',
      stat_clients: 'Clients',
      stat_projects: 'Project Selesai',

      // Services Drawer
      services_drawer_kicker: 'LAYANAN JAYRYU',
      services_drawer_cta: 'Diskusikan kebutuhan',
      services_close_aria: 'Tutup layanan',

      // Services Grid
      services_kicker: 'Yang Kami Bangun',
      services_heading: 'Layanan Kami',
      services_sub: 'Solusi digital yang dirancang khusus untuk kebutuhan bisnis Anda.',
      services_see_projects: 'Lihat Contoh Proyek',
      services_consult_req: 'Konsultasi Kebutuhan',

      service_card_1_title: 'Website Development',
      service_card_1_desc: 'Website bisnis, landing page, katalog, dan company profile perusahaan.',
      service_card_2_title: 'Mobile App Development',
      service_card_2_desc: 'Aplikasi mobile khusus untuk platform Android dan iOS.',
      service_card_3_title: 'Web Application',
      service_card_3_desc: 'Sistem berbasis web kustom untuk mendukung operasional bisnis.',
      service_card_4_title: 'API & Integrasi Sistem',
      service_card_4_desc: 'Hubungkan aplikasi, API, dan layanan pihak ketiga secara andal.',
      service_card_5_title: 'Maintenance & Bug Fixing',
      service_card_5_desc: 'Jaga website dan aplikasi Anda tetap andal, aman, dan terkini.',
      service_card_6_title: 'Solusi Digital Kustom',
      service_card_6_desc: 'Solusi teknologi yang dirancang mengikuti kebutuhan spesifik Anda.',

      // Clients Marquee
      clients_kicker: 'Clients & Credentials',
      credential_close_aria: 'Tutup',

      // Project Archive / Portfolio
      archive_heading: 'Dipercaya Oleh',
      filter_all: 'Semua',
      filter_web: 'Website',
      filter_webapp: 'Web App',
      filter_mobileapp: 'Mobile App',
      price_range_label: 'Kisaran Harga',
      project_scope_label: 'Cakupan Proyek',
      view_project_btn: 'Lihat Proyek',

      // Project Cards
      p1_badge: 'Website Penjualan & Katalog',
      p1_cat: 'Website Development',
      p1_desc: 'Katalog kendaraan interaktif dengan simulasi kredit dan integrasi WhatsApp.',
      p1_price: 'Mulai dari Rp500.000',

      p2_badge: 'Website Penjualan & Katalog',
      p2_cat: 'Website Development',
      p2_desc: 'Showroom digital mobil baru & bekas dengan pemesanan test drive terintegrasi.',
      p2_price: 'Mulai dari Rp500.000',

      p3_badge: 'Katalog Properti & Perumahan',
      p3_cat: 'Website Development',
      p3_desc: 'Katalog properti modern dengan masterplan interaktif, denah unit, dan kalkulator KPR.',
      p3_price: 'Mulai dari Rp500.000',

      p4_badge: 'Aplikasi Web Enterprise',
      p4_cat: 'Web Application',
      p4_desc: 'Sistem ERP dan pelacakan inventaris gudang berbasis cloud untuk operasional bisnis.',
      p4_price: 'Proyek Kustom',

      p5_badge: 'Aplikasi Mobile Multiplatform',
      p5_cat: 'Mobile App Development',
      p5_desc: 'Aplikasi mobile iOS & Android berperforma tinggi dengan pelacakan paket dan katalog produk.',
      p5_price: 'Proyek Kustom',

      p6_badge: 'Website Ritel & Katalog UMKM',
      p6_cat: 'Website Development',
      p6_desc: 'Katalog kopi artisan dan toko online dengan peta lokasi gerai dan pemesanan WhatsApp.',
      p6_price: 'Mulai dari Rp700.000',

      // About
      about_badge: 'Siapa Kami',
      about_heading: 'Tentang JAYRYU',
      about_desc: 'JAYRYU adalah tim teknologi yang berfokus membangun solusi digital praktis dan berdaya guna untuk bisnis dan organisasi.',
      vision_badge: 'Visi Kami',
      vision_quote: '“Membangun pengalaman digital yang bermanfaat melalui teknologi, kreativitas, dan kolaborasi.”',
      vision_note: 'Berfokus pada hasil komersial yang terukur',
      mission_badge: 'Misi Kami',
      mission_desc: 'Menghadirkan solusi digital yang relevan, mudah digunakan, dan membantu bisnis berkembang.',
      team_view_profile: 'Buka profil',

      team_nazar_role: 'CCO · Analisis & Web',
      team_reyhan_role: 'Professional IT · Web, App, Bug & Maintenance',
      team_raniayu_role: 'Marketing & Media Sosial',
      team_yusuf_role: 'Co-Founder & Marketing',

      // Technology
      tech_badge: 'Kepercayaan Teknis',
      tech_heading: 'Teknologi',
      tech_desc: 'Dibangun menggunakan teknologi andal dan modern.',

      tech_laravel_sub: 'Backend Framework',
      tech_php_sub: 'Core Runtime',
      tech_mysql_sub: 'Relational DB',
      tech_js_sub: 'Dynamic Web UI',
      tech_html_sub: 'Modern Semantics',
      tech_api_sub: 'System Integration',
      tech_rn_sub: 'Mobile Applications',
      tech_vue_sub: 'Interactive Interfaces',
      tech_flutter_sub: 'Cross-platform Apps',
      tech_firebase_sub: 'Backend & Cloud Services',
      tech_forgesql_sub: 'Database Modeling',
      tech_git_sub: 'Version Control',
      tech_postman_sub: 'API Debugging',
      tech_devtools_sub: 'Browser Debugging',
      tech_docker_sub: 'Development Environment',
      tech_phpunit_sub: 'PHP Testing',

      // Contact
      contact_heading: 'Punya Rencana Proyek?',
      contact_desc: 'Mari wujudkan ide Anda menjadi solusi digital nyata.',
      contact_cta_btn: 'Mulai Proyek',

      // Footer
      footer_role: 'Pengembangan Web & Aplikasi',
      footer_desc: 'Perusahaan teknologi yang membangun website, aplikasi web, dan solusi mobile untuk bisnis masa kini.',
      footer_nav_heading: 'Navigasi',
      footer_link_home: 'Beranda',
      footer_link_services: 'Layanan',
      footer_link_about: 'Tentang',
      footer_link_clients: 'Klien',
      footer_link_tech: 'Teknologi',
      footer_direct_contact: 'Kontak Langsung',
      footer_copyright: '© 2026 JAYRYU. Hak cipta dilindungi undang-undang.',
      footer_standards: 'Dibangun dengan presisi dan standar web modern.',

      // Modals
      pm_overview: 'Ringkasan',
      pm_core_features: 'Fitur Utama',
      pm_technologies: 'Teknologi',
      pm_invest_range: 'Kisaran Investasi',
      pm_cta: 'Diskusikan Proyek Serupa',

      tm_profile_heading: 'Profil Tim',
      tm_bg_role: 'Latar Belakang & Peran',
      tm_visit_web: 'Kunjungi rhyru9.xyz',
      tm_focus_areas: 'Area Fokus',
      tm_wa_btn: 'Konsultasi WhatsApp Langsung',

      cm_subtitle: 'Hubungi Nazar untuk konsultasi JAYRYU.',
      cm_inquiry_topic: 'Topik Konsultasi:',
      cm_nazar_role: 'Arsitektur Web & Teknis',
      cm_chat_btn: 'Chat',
      cm_footer_note: 'Respon langsung dari tim inti • Konsultasi gratis',
      cm_default_topic: 'Solusi Digital & Web Development JAYRYU',
      cm_wa_prefix: 'Halo Tim JAYRYU, saya tertarik dan ingin berkonsultasi mengenai: ',
      cm_wa_suffix: '. Mohon informasi dan rekomendasi solusi terbaik.',
      cm_project_similar_prefix: 'Proyek Serupa: ',

      // Certifications Page Specific
      cert_page_title: 'Sertifikasi & Pengakuan — JAYRYU',
      cert_page_desc: 'Sertifikasi dan pengakuan keamanan siber JAYRYU dari organisasi pemerintah, teknologi, dan program bug bounty.',
      cert_back_link: 'Kembali ke JAYRYU',
      cert_eyebrow: 'JAYRYU · KEAMANAN SIBER',
      cert_heading: 'Sertifikasi & Pengakuan',
      cert_lede: 'Pengakuan, sertifikasi, dan apresiasi atas kontribusi keamanan siber JAYRYU di berbagai organisasi.',
      cert_summary_recognitions: 'pengakuan',
      cert_summary_years: 'tahun',
      cert_count_2026: '06 pengakuan',
      cert_count_2025: '03 pengakuan',
      cert_count_2023: '02 sertifikasi',
      cert_desc_belgium: 'Pengakuan atas kontribusi keamanan yang tercatat dalam Hall of Fame pemerintah Belgia.',
      cert_desc_blackberry: 'Apresiasi dari BlackBerry atas kontribusi pada keamanan produk dan ekosistemnya.',
      cert_desc_apple: 'Pengakuan untuk pelaporan kerentanan WebKit dengan identitas CVE-2026-43735.',
      cert_desc_ferrari: 'Pengakuan atas kontribusi keamanan yang tercatat di Hall of Fame Ferrari.',
      cert_desc_itb: 'Pengakuan dari ITB atas kontribusi dalam pengungkapan isu keamanan.',
      cert_desc_nasa: 'Surat apresiasi NASA atas kontribusi yang diberikan kepada organisasi.',
      cert_desc_bali: 'Apresiasi atas kontribusi pada kegiatan security assessment Provinsi Bali.',
      cert_desc_bekasi: 'Apresiasi atas kontribusi pada kegiatan security assessment Pemkot Bekasi.',
      cert_desc_diy: 'Apresiasi atas kontribusi pada kegiatan security assessment Provinsi DIY.',
      cert_desc_hackerone: 'Sertifikasi bug bounty hunter dari HackerOne.',
      cert_desc_yeswehack: 'Sertifikasi bug bounty hunter dari YesWeHack.'
    },

    en: {
      page_title: 'JAYRYU — Web & App Development | Digital Solutions',
      page_description: 'JAYRYU is a technology company and digital development agency building modern websites, web applications, and mobile apps.',
      nav_brand_aria: 'JAYRYU — Home',
      nav_web: 'Web',
      nav_app: 'App',
      nav_bug: 'Bug',
      nav_maintenance: 'Maintenance',
      nav_custom: 'Custom',
      mobile_lang_title: 'Language',
      mobile_menu_aria: 'Toggle Menu',

      // Hero
      hero_badge: 'DIGITAL AGENCY',
      hero_title: 'Digital Solutions',
      hero_desc: 'Build digital solutions that drive your business forward.',
      hero_cta: 'Start a Project',

      // Stats
      stat_years: 'Years of Experience',
      stat_clients: 'Clients',
      stat_projects: 'Completed Projects',

      // Services Drawer
      services_drawer_kicker: 'JAYRYU SERVICES',
      services_drawer_cta: 'Discuss Requirements',
      services_close_aria: 'Close services',

      // Services Grid
      services_kicker: 'What We Build',
      services_heading: 'Our Services',
      services_sub: 'Digital solutions built around your needs.',
      services_see_projects: 'View Projects',
      services_consult_req: 'Consult Requirements',

      service_card_1_title: 'Website Development',
      service_card_1_desc: 'Business websites, landing pages, catalogs and company profiles.',
      service_card_2_title: 'Mobile App Development',
      service_card_2_desc: 'Custom mobile applications for Android and iOS.',
      service_card_3_title: 'Web Application',
      service_card_3_desc: 'Custom web-based systems for business operations.',
      service_card_4_title: 'API & System Integration',
      service_card_4_desc: 'Connect your applications, APIs and third-party services.',
      service_card_5_title: 'Maintenance & Bug Fixing',
      service_card_5_desc: 'Keep your website and application reliable and up to date.',
      service_card_6_title: 'Custom Digital Solution',
      service_card_6_desc: 'Solutions designed around your specific requirements.',

      // Clients Marquee
      clients_kicker: 'Clients & Credentials',
      credential_close_aria: 'Close',

      // Project Archive / Portfolio
      archive_heading: 'Trusted By',
      filter_all: 'All',
      filter_web: 'Website',
      filter_webapp: 'Web App',
      filter_mobileapp: 'Mobile App',
      price_range_label: 'Price Range',
      project_scope_label: 'Project Scope',
      view_project_btn: 'View Project',

      // Project Cards
      p1_badge: 'Sales & Catalog Website',
      p1_cat: 'Website Development',
      p1_desc: 'Interactive vehicle catalog with credit simulation and WhatsApp.',
      p1_price: 'Starting from Rp500.000',

      p2_badge: 'Sales & Catalog Website',
      p2_cat: 'Website Development',
      p2_desc: 'Showcase platform for new & pre-owned vehicles with test drive booking.',
      p2_price: 'Starting from Rp500.000',

      p3_badge: 'Property & Cluster Catalog',
      p3_cat: 'Website Development',
      p3_desc: 'Modern property catalog featuring siteplans, floor layouts, and KPR estimation.',
      p3_price: 'Starting from Rp500.000',

      p4_badge: 'Enterprise Web Application',
      p4_cat: 'Web Application',
      p4_desc: 'Custom web-based ERP and inventory tracking system built to streamline warehouse operations.',
      p4_price: 'Custom Project',

      p5_badge: 'Cross-Platform Mobile App',
      p5_cat: 'Mobile App Development',
      p5_desc: 'Native-feel iOS and Android mobile app with live parcel tracking and catalog browsing.',
      p5_price: 'Custom Project',

      p6_badge: 'Commercial Catalog & UMKM',
      p6_cat: 'Website Development',
      p6_desc: 'Artisan coffee catalog and online store with store locator and direct orders.',
      p6_price: 'Starting from Rp700.000',

      // About
      about_badge: 'Who We Are',
      about_heading: 'About JAYRYU',
      about_desc: 'JAYRYU is a technology team focused on building practical digital solutions for businesses and organizations.',
      vision_badge: 'Our Vision',
      vision_quote: '“Building useful digital experiences through technology, creativity, and collaboration.”',
      vision_note: 'Focused on measurable commercial results',
      mission_badge: 'Our Mission',
      mission_desc: 'Delivering relevant, user-friendly digital solutions that help businesses grow.',
      team_view_profile: 'View profile',

      team_nazar_role: 'CCO · Analysis & Web',
      team_reyhan_role: 'Professional IT · Web, App, Bug & Maintenance',
      team_raniayu_role: 'Marketing & Social Media',
      team_yusuf_role: 'Co-Founder & Marketing',

      // Technology
      tech_badge: 'Technical Trust',
      tech_heading: 'Technology',
      tech_desc: 'Built with reliable and modern technologies.',

      tech_laravel_sub: 'Backend Framework',
      tech_php_sub: 'Core Runtime',
      tech_mysql_sub: 'Relational DB',
      tech_js_sub: 'Dynamic Web UI',
      tech_html_sub: 'Modern Semantics',
      tech_api_sub: 'System Integration',
      tech_rn_sub: 'Mobile Applications',
      tech_vue_sub: 'Interactive Interfaces',
      tech_flutter_sub: 'Cross-platform Apps',
      tech_firebase_sub: 'Backend & Cloud Services',
      tech_forgesql_sub: 'Database Modeling',
      tech_git_sub: 'Version Control',
      tech_postman_sub: 'API Debugging',
      tech_devtools_sub: 'Browser Debugging',
      tech_docker_sub: 'Development Environment',
      tech_phpunit_sub: 'PHP Testing',

      // Contact
      contact_heading: 'Have a Project in Mind?',
      contact_desc: "Let's turn your idea into a digital solution.",
      contact_cta_btn: 'Start a Project',

      // Footer
      footer_role: 'Web & App Development',
      footer_desc: 'Technology company building websites, web applications, and mobile solutions for forward-thinking businesses.',
      footer_nav_heading: 'Navigation',
      footer_link_home: 'Home',
      footer_link_services: 'Services',
      footer_link_about: 'About',
      footer_link_clients: 'Clients',
      footer_link_tech: 'Technology',
      footer_direct_contact: 'Direct Contact',
      footer_copyright: '© 2026 JAYRYU. All rights reserved.',
      footer_standards: 'Built with precision and modern web standards.',

      // Modals
      pm_overview: 'Overview',
      pm_core_features: 'Core Features',
      pm_technologies: 'Technologies',
      pm_invest_range: 'Investment Range',
      pm_cta: 'Discuss Similar Project',

      tm_profile_heading: 'Team Profile',
      tm_bg_role: 'Background & Role',
      tm_visit_web: 'Visit rhyru9.xyz',
      tm_focus_areas: 'Focus Areas',
      tm_wa_btn: 'Direct WhatsApp Consultation',

      cm_subtitle: 'Contact Nazar for JAYRYU consultation.',
      cm_inquiry_topic: 'Inquiry Topic:',
      cm_nazar_role: 'Technical & Web Architecture',
      cm_chat_btn: 'Chat',
      cm_footer_note: 'Direct response from founders • Free consultation',
      cm_default_topic: 'JAYRYU Digital Solutions & Web Development',
      cm_wa_prefix: 'Hello JAYRYU Team, I am interested and would like to consult regarding: ',
      cm_wa_suffix: '. Please share more information and your best recommendation.',
      cm_project_similar_prefix: 'Similar Project: ',

      // Certifications Page Specific
      cert_page_title: 'Certifications & Recognition — JAYRYU',
      cert_page_desc: 'Official cybersecurity certifications, hall of fame inductions, and recognition for JAYRYU from government, tech, and bug bounty programs.',
      cert_back_link: 'Back to JAYRYU',
      cert_eyebrow: 'JAYRYU · CYBERSECURITY',
      cert_heading: 'Certifications & Recognition',
      cert_lede: 'Official recognitions, certifications, and security disclosures honoring JAYRYU across global organizations.',
      cert_summary_recognitions: 'recognitions',
      cert_summary_years: 'years',
      cert_count_2026: '06 recognitions',
      cert_count_2025: '03 recognitions',
      cert_count_2023: '02 certifications',
      cert_desc_belgium: 'Official recognition for cybersecurity contributions recorded in the Belgian Government Hall of Fame.',
      cert_desc_blackberry: 'Appreciation from BlackBerry for contributions to the security of its products and ecosystem.',
      cert_desc_apple: 'Recognition for responsible disclosure of Apple WebKit vulnerability CVE-2026-43735.',
      cert_desc_ferrari: 'Official recognition for security contributions inducted into the Ferrari Hall of Fame.',
      cert_desc_itb: 'Recognition from ITB for contributions in responsible disclosure of security issues.',
      cert_desc_nasa: 'Official NASA Letter of Appreciation for security contributions provided to the agency.',
      cert_desc_bali: 'Appreciation for contributions to the Bali Provincial Government security assessment.',
      cert_desc_bekasi: 'Appreciation for contributions to the Bekasi City Government security assessment.',
      cert_desc_diy: 'Appreciation for contributions to the DIY Provincial Government security assessment.',
      cert_desc_hackerone: 'Official Bug Bounty Hunter Certification from HackerOne.',
      cert_desc_yeswehack: 'Official Bug Bounty Hunter Certification from YesWeHack.'
    }
  };

  const serviceDetails = {
    id: {
      web: {
        title: 'Website Development',
        description: 'Website company profile, landing page, katalog, dan toko online yang responsif, cepat, serta disesuaikan dengan karakter bisnis Anda.'
      },
      app: {
        title: 'Mobile App Development',
        description: 'Aplikasi Android dan iOS untuk membantu pelanggan mengakses layanan, informasi, dan transaksi bisnis dengan lebih mudah.'
      },
      bug: {
        title: 'Bug Fixing & Keamanan',
        description: 'Pemeriksaan dan perbaikan bug, celah keamanan, serta masalah teknis agar website dan aplikasi berjalan lebih aman dan stabil.'
      },
      maintenance: {
        title: 'Website Maintenance',
        description: 'Perawatan rutin, pembaruan konten dan sistem, backup, serta pemantauan performa agar layanan digital tetap terjaga.'
      },
      custom: {
        title: 'Solusi Digital Kustom',
        description: 'Sistem, integrasi API, dan fitur khusus yang dirancang mengikuti alur kerja serta kebutuhan bisnis Anda.'
      }
    },
    en: {
      web: {
        title: 'Website Development',
        description: 'Responsive, fast, and modern company profiles, landing pages, catalogs, and online stores tailored to your business identity.'
      },
      app: {
        title: 'Mobile App Development',
        description: 'Native and cross-platform Android and iOS applications to help customers easily access your services, information, and transactions.'
      },
      bug: {
        title: 'Bug Fixing & Security',
        description: 'Comprehensive bug resolution, security patch audits, and technical troubleshooting to ensure stable, secure website and app performance.'
      },
      maintenance: {
        title: 'Website Maintenance',
        description: 'Routine maintenance, content and system updates, regular backups, and continuous performance monitoring for seamless operations.'
      },
      custom: {
        title: 'Custom Digital Solutions',
        description: 'Custom systems, API integrations, and specialized architecture designed around your unique business workflows.'
      }
    }
  };

  const credentialData = {
    id: {
      apple: {
        logo: 'Apple', image: 'assets/images/client-logos/apple.png', organization: 'Apple WebKit', title: 'CVE-2026-43735', year: '2026',
        category: 'Security Research / CVE',
        description: 'Responsible disclosure terkait kerentanan keamanan pada Apple WebKit.'
      },
      nasa: {
        logo: 'NASA', image: 'assets/images/client-logos/nasa.png', organization: 'NASA', title: 'NASA Letter of Appreciation', year: '2026',
        category: 'Vulnerability Disclosure',
        description: 'Apresiasi dan pengakuan atas responsible disclosure kerentanan keamanan.'
      },
      ferrari: {
        logo: 'Ferrari', image: 'assets/images/client-logos/ferrari.png', organization: 'Ferrari', title: 'Ferrari Hall of Fame', year: '2026',
        category: 'Responsible Disclosure',
        description: 'Pengakuan terkait penemuan dan pelaporan kerentanan keamanan pada sistem digital Ferrari.'
      },
      blackberry: {
        logo: 'BlackBerry', image: 'assets/images/client-logos/blackberry.png', organization: 'BlackBerry', title: 'BlackBerry Hall of Fame', year: '2026',
        category: 'Security Recognition',
        description: 'Pengakuan terkait penemuan dan pelaporan kerentanan keamanan pada produk BlackBerry.'
      },
      belgium: {
        logo: 'Belgium Government', organization: 'Belgium Government', title: 'Belgium Government Hall of Fame', year: '2026',
        category: 'Responsible Disclosure',
        description: 'Pengakuan terkait responsible disclosure kerentanan keamanan pada sistem pemerintah Belgia.'
      },
      itb: {
        logo: 'ITB', organization: 'Institut Teknologi Bandung', title: 'ITB Security Disclosure', year: '2026',
        category: 'Security Disclosure',
        description: 'Pengakuan terkait responsible disclosure kerentanan keamanan pada infrastruktur digital ITB.'
      },
      hackerone: {
        logo: 'HackerOne', organization: 'HackerOne', title: 'Bug Bounty Hunter Certification', year: '2023',
        category: 'Certification',
        description: 'Sertifikasi Bug Bounty Hunter resmi dari HackerOne.'
      },
      yeswehack: {
        logo: 'YesWeHack', organization: 'YesWeHack', title: 'Bug Bounty Hunter Certification', year: '2023',
        category: 'Certification',
        description: 'Sertifikasi Bug Bounty Hunter resmi dari YesWeHack.'
      },
      bali: {
        logo: 'Provinsi Bali', organization: 'Provinsi Bali', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Pengakuan terkait responsible disclosure kerentanan keamanan pada infrastruktur Pemerintah Provinsi Bali.'
      },
      bekasi: {
        logo: 'Pemkot Bekasi', image: 'assets/images/client-logos/pemkot%20dan%20lain%20lain.png', organization: 'Pemkot Bekasi', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Pengakuan terkait security vulnerability assessment pada sistem Pemerintah Kota Bekasi.'
      },
      diy: {
        logo: 'Provinsi DIY', organization: 'Provinsi DIY', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Pengakuan terkait penemuan dan responsible disclosure kerentanan keamanan pada sistem Pemerintah Provinsi DIY.'
      }
    },
    en: {
      apple: {
        logo: 'Apple', image: 'assets/images/client-logos/apple.png', organization: 'Apple WebKit', title: 'CVE-2026-43735', year: '2026',
        category: 'Security Research / CVE',
        description: 'Responsible disclosure regarding security vulnerabilities in Apple WebKit.'
      },
      nasa: {
        logo: 'NASA', image: 'assets/images/client-logos/nasa.png', organization: 'NASA', title: 'NASA Letter of Appreciation', year: '2026',
        category: 'Vulnerability Disclosure',
        description: 'Official appreciation and recognition for responsible security vulnerability disclosure.'
      },
      ferrari: {
        logo: 'Ferrari', image: 'assets/images/client-logos/ferrari.png', organization: 'Ferrari', title: 'Ferrari Hall of Fame', year: '2026',
        category: 'Responsible Disclosure',
        description: 'Recognition for discovering and reporting security vulnerabilities in Ferrari digital systems.'
      },
      blackberry: {
        logo: 'BlackBerry', image: 'assets/images/client-logos/blackberry.png', organization: 'BlackBerry', title: 'BlackBerry Hall of Fame', year: '2026',
        category: 'Security Recognition',
        description: 'Recognition for discovering and reporting security vulnerabilities across BlackBerry ecosystem.'
      },
      belgium: {
        logo: 'Belgium Government', organization: 'Belgium Government', title: 'Belgium Government Hall of Fame', year: '2026',
        category: 'Responsible Disclosure',
        description: 'Official recognition for responsible security vulnerability disclosure in Belgian government systems.'
      },
      itb: {
        logo: 'ITB', organization: 'Institut Teknologi Bandung', title: 'ITB Security Disclosure', year: '2026',
        category: 'Security Disclosure',
        description: 'Recognition for responsible disclosure of security issues across ITB digital infrastructure.'
      },
      hackerone: {
        logo: 'HackerOne', organization: 'HackerOne', title: 'Bug Bounty Hunter Certification', year: '2023',
        category: 'Certification',
        description: 'Official Bug Bounty Hunter Certification from HackerOne.'
      },
      yeswehack: {
        logo: 'YesWeHack', organization: 'YesWeHack', title: 'Bug Bounty Hunter Certification', year: '2023',
        category: 'Certification',
        description: 'Official Bug Bounty Hunter Certification from YesWeHack.'
      },
      bali: {
        logo: 'Provinsi Bali', organization: 'Provinsi Bali', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Recognition for responsible security vulnerability disclosure across Bali Provincial Government infrastructure.'
      },
      bekasi: {
        logo: 'Pemkot Bekasi', image: 'assets/images/client-logos/pemkot%20dan%20lain%20lain.png', organization: 'Pemkot Bekasi', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Recognition for security vulnerability assessment across Bekasi City Government systems.'
      },
      diy: {
        logo: 'Provinsi DIY', organization: 'Provinsi DIY', title: 'Security Assessment', year: '2025',
        category: 'Security Assessment',
        description: 'Recognition for discovering and responsible disclosure of security vulnerabilities in DIY Provincial Government systems.'
      }
    }
  };

  const projectDatabase = {
    id: {
      'bintang-motor': {
        name: 'Bintang Motor',
        category: 'Website Development',
        badge: 'Website Penjualan & Katalog',
        shortDesc: 'Katalog digital berkonversi tinggi yang dirancang untuk membantu tim penjualan otomotif mempresentasikan kendaraan, menghitung simulasi cicilan kredit, dan terhubung langsung dengan calon pembeli.',
        image: 'assets/images/mockup_motor.jpg',
        price: 'Mulai dari Rp500.000',
        priceNote: 'Harga akhir menyesuaikan fitur dan kebutuhan proyek.',
        features: [
          'Katalog Produk Interaktif & Varian Warna',
          'Simulasi Otomatis Kredit & DP Angsuran',
          'Koneksi Langsung WhatsApp pada Setiap Unit',
          'Tampilan Responsif Optimal di Perangkat Mobile'
        ],
        tech: ['PHP / Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript']
      },
      'premier-auto': {
        name: 'Premier Automotive',
        category: 'Website Development',
        badge: 'Website Penjualan & Katalog',
        shortDesc: 'Showroom digital modern yang dirancang untuk dealer mobil mewah baru & bekas dengan integrasi pemesanan test drive online dan kalkulator pembiayaan.',
        image: 'assets/images/mockup_mobil.jpg',
        price: 'Mulai dari Rp500.000',
        priceNote: 'Harga akhir menyesuaikan fitur dan kebutuhan proyek.',
        features: [
          'Showcase Kendaraan dengan Spesifikasi Lengkap',
          'Kalkulator Estimasi DP & Cicilan Leasing Bulanan',
          'Formulir Pemesanan Uji Berkendara (Test Drive) Online',
          'Perutean Langsung ke WhatsApp Tim Sales'
        ],
        tech: ['Laravel', 'MySQL', 'JavaScript ES6', 'Tailwind CSS']
      },
      'luxe-living': {
        name: 'Luxe Living — Serene Valley',
        category: 'Website Development',
        badge: 'Katalog Properti & Perumahan',
        shortDesc: 'Showcase portofolio properti dan klaster residensial dengan masterplan interaktif, denah unit arsitektural, serta estimasi cicilan KPR bank secara instan.',
        image: 'assets/images/mockup_perumahan.jpg',
        price: 'Mulai dari Rp500.000',
        priceNote: 'Harga akhir menyesuaikan fitur dan kebutuhan proyek.',
        features: [
          'Presentasi Masterplan & Klaster Unit Residensial',
          'Denah Arsitektur & Spesifikasi Bangunan',
          'Alat Estimasi Simulasi KPR Bank',
          'Unduh Brosur Digital PDF & Pemesanan WhatsApp'
        ],
        tech: ['PHP 8', 'MySQL', 'Tailwind CSS', 'Alpine.js']
      },
      'kopi-rasa': {
        name: 'Kopi & Rasa Roastery',
        category: 'Website Development',
        badge: 'Website Ritel & Katalog UMKM',
        shortDesc: 'Platform web ritel dan katalog kopi artisan modern yang dibangun untuk memamerkan biji kopi spesialti dan memfasilitasi pesanan langsung via checkout WhatsApp.',
        image: 'assets/images/mockup_umkm.jpg',
        price: 'Mulai dari Rp700.000',
        priceNote: 'Harga akhir menyesuaikan fitur dan kebutuhan proyek.',
        features: [
          'Katalog Produk Kopi Artisan Terkurasi',
          'Integrasi Keranjang Belanja Langsung ke WhatsApp',
          'Pencari Lokasi Toko Interaktif Google Maps',
          'Sistem Ulasan & Testimoni Pelanggan'
        ],
        tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS']
      },
      'nexus-erp': {
        name: 'Nexus Logistics & ERP',
        category: 'Web Application',
        badge: 'Aplikasi Web Enterprise',
        shortDesc: 'Dashboard operasional berbasis cloud kustom yang dirancang untuk mengelola inventaris gudang, pengiriman, pelacakan status armada, dan analitik operasional mingguan.',
        image: 'assets/images/mockup_webapp.jpg',
        price: 'Proyek Kustom',
        priceNote: 'Cakupan dan lini masa disesuaikan dengan alur kerja bisnis Anda.',
        features: [
          'Pemantauan Inventaris Gudang Real-time',
          'Alur Pengiriman Pesanan & Pelacakan Kargo',
          'Grafik Analitik Data & Laporan Kinerja',
          'Keamanan Hak Akses Berbasis Peran Multi-Pengguna'
        ],
        tech: ['Laravel REST API', 'MySQL Database', 'Vue / Modern JS', 'Tailwind CSS']
      },
      'aura-mobile': {
        name: 'Aura Mobile Commerce',
        category: 'Mobile App Development',
        badge: 'Aplikasi Mobile Multiplatform',
        shortDesc: 'Aplikasi mobile berkecepatan tinggi untuk iOS dan Android dengan fitur pelacakan perjalanan kurir secara langsung, katalog belanja dalam aplikasi, dan notifikasi instan.',
        image: 'assets/images/mockup_mobileapp.jpg',
        price: 'Proyek Kustom',
        priceNote: 'Arsitektur dan fitur dirancang khusus memenuhi kebutuhan bisnis Anda.',
        features: [
          'Arsitektur Lintas Platform iOS & Android',
          'Peta Langsung & Pelacakan Status Pengiriman',
          'Pemberitahuan Push & Pembaruan Instan',
          'Antarmuka Cepat dengan Caching Offline'
        ],
        tech: ['Flutter / React Native', 'RESTful API', 'Node.js / Laravel', 'PostgreSQL']
      }
    },
    en: {
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
    }
  };

  const teamDatabase = {
    id: {
      'nazar': {
        name: 'Nazar Alfarija',
        role: 'CCO — Analisis & Web',
        image: 'profil pendiri/Nazar Alfarija.jpeg',
        bio: 'Memimpin analisis kebutuhan dan pengembangan arsitektur solusi web.',
        details: 'Berfokus pada analisis kebutuhan teknis, perencanaan arsitektur solusi digital, dan rekayasa web yang selaras dengan akselerasi bisnis klien.',
        focus: ['Analisis Kebutuhan', 'Pengembangan Web', 'Pengembangan Sistem', 'Solusi Digital'],
        waLink: 'https://wa.me/62895365509303?text=Halo%20Nazar,%20saya%20ingin%20konsultasi%20mengenai%20pengembangan%20sistem%20dan%20website%20di%20JAYRYU.'
      },
      'yusuf': {
        name: 'Yusuf Ramdany',
        role: 'Co-Founder & Marketing',
        image: 'profil pendiri/Yusuf Ramdany.jpeg',
        bio: 'Pemasaran digital, komunikasi klien, dan pengembangan kemitraan bisnis.',
        details: 'STISIP Widyapuri Mandiri. Memimpin strategi pemasaran, konsultasi klien, keselarasan pasar, dan pengembangan kemitraan bisnis untuk memastikan setiap solusi digital menghasilkan dampak komersial terukur.',
        focus: ['Pemasaran Digital', 'Komunikasi Klien', 'Pengembangan Bisnis']
      },
      'rayhan': {
        name: 'Reyhan',
        role: 'Professional IT',
        website: 'https://rhyru9.xyz/',
        image: '',
        bio: 'Menangani kebutuhan IT JAYRYU untuk web, aplikasi, perbaikan bug, dan maintenance.',
        details: 'Berfokus pada rekayasa dan pemeliharaan website serta aplikasi mobile, perbaikan celah teknis, dan dukungan infrastruktur.',
        focus: ['Web', 'App', 'Bug Fixing', 'Maintenance']
      },
      'raniayu': {
        name: 'Raniayu',
        role: 'Marketing & Social Media',
        image: '',
        initial: 'RA',
        bio: 'Mengelola strategi pemasaran, komunikasi merek, dan media sosial JAYRYU.',
        details: 'Berfokus pada komunikasi brand, pengelolaan kanal media sosial, serta penyampaian informasi layanan JAYRYU kepada publik.',
        focus: ['Pemasaran', 'Media Sosial', 'Komunikasi Brand']
      }
    },
    en: {
      'nazar': {
        name: 'Nazar Alfarija',
        role: 'CCO — Analysis & Web',
        image: 'profil pendiri/Nazar Alfarija.jpeg',
        bio: 'Leading requirements analysis and web architecture development.',
        details: 'Focused on technical needs assessment, digital solution planning, and web engineering aligned directly with business growth objectives.',
        focus: ['Requirements Analysis', 'Web Development', 'System Development', 'Digital Solutions'],
        waLink: 'https://wa.me/62895365509303?text=Hello%20Nazar,%20I%20would%20like%20to%20consult%20regarding%20web%20and%20system%20development%20at%20JAYRYU.'
      },
      'yusuf': {
        name: 'Yusuf Ramdany',
        role: 'Co-Founder & Marketing',
        image: 'profil pendiri/Yusuf Ramdany.jpeg',
        bio: 'Digital marketing, client communication, and business development.',
        details: 'STISIP Widyapuri Mandiri. Leads marketing strategy, client consultations, market alignment, and business development to ensure each digital solution achieves tangible commercial impact.',
        focus: ['Digital Marketing', 'Client Communication', 'Business Development']
      },
      'rayhan': {
        name: 'Reyhan',
        role: 'Professional IT',
        website: 'https://rhyru9.xyz/',
        image: '',
        bio: 'Handling JAYRYU IT operations across web, apps, bug fixing, and maintenance.',
        details: 'Focusing on building and maintaining websites and mobile apps, technical troubleshooting, and robust engineering support.',
        focus: ['Web', 'App', 'Bug Fixing', 'Maintenance']
      },
      'raniayu': {
        name: 'Raniayu',
        role: 'Marketing & Social Media',
        image: '',
        initial: 'RA',
        bio: 'Managing marketing strategies, brand communication, and social media.',
        details: 'Focused on brand voice consistency, social media channel management, and articulating JAYRYU service offerings to the public.',
        focus: ['Marketing', 'Social Media', 'Brand Communication']
      }
    }
  };

  // Expose to window
  window.JAYRYU_I18N = {
    translations,
    serviceDetails,
    credentialData,
    projectDatabase,
    teamDatabase,
    getSavedLang: function () {
      try {
        const saved = localStorage.getItem('jayryu_lang');
        if (saved === 'en' || saved === 'id') return saved;
      } catch (e) {}
      return 'id'; // default to Indonesian as requested
    },
    setSavedLang: function (lang) {
      try {
        localStorage.setItem('jayryu_lang', lang);
      } catch (e) {}
    }
  };
})();
