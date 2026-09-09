/**
 * NETFLIX THEME JAVASCRIPT - PEMUDA PURWOASRI
 * Desa Purwoasri, Kec. Tegaldlimo, Kab. Banyuwangi
 * Full Interactive Netflix Experience (Sound, Tabs, Seasons, Modals, My List, WhatsApp Direct)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const DEFAULT_WA_NUMBER = '6287865503625'; // WhatsApp Sekretariat Pemuda Purwoasri

  // =======================================================
  // 1. DATA MASTER EPISODE & KEGIATAN DESA PURWOASRI
  // =======================================================
  const EPISODES_DATA = {
    1: [ // Season 1: Program Hiburan Rakyat & PHBN
      {
        id: 's1e1',
        season: 1,
        episode: 1,
        title: 'Parade Sound Horeg (Karnaval Desa)',
        date: '28 Agustus 2026',
        duration: 'Karnaval Akbar',
        dusun: 'Pusat Desa Purwoasri',
        image: 'assets/img/kegiatan-sound-horeg.webp',
        match: '99% Cocok',
        tags: ['Sound Horeg', 'Rere Audio', 'Karnaval Desa', 'PHBN'],
        desc: 'Rangkaian parade truk bermuatan subwoofer raksasa (didukung sound system horeg seperti Rere Audio) yang diadakan sebagai puncak Karnaval Bersama warga Purwoasri menjelang akhir Agustus.',
        cast: 'Kepanitiaan PHBN Desa & Komunitas Sound',
        status: 'Puncak Peringatan HUT RI'
      },
      {
        id: 's1e2',
        season: 1,
        episode: 2,
        title: 'Karnaval Budaya dan Ogoh-Ogoh',
        date: '24 Agustus 2026',
        duration: 'Pawai Siang Hari',
        dusun: 'Jalanan Utama Desa Purwoasri',
        image: 'assets/img/kegiatan-ogoh-ogoh.webp',
        match: '98% Cocok',
        tags: ['Ogoh-Ogoh', 'Baju Adat', 'Karnaval Budaya'],
        desc: 'Pementasan baju adat nusantara, kesenian lokal, dan replika patung ogoh-ogoh raksasa kreasi pemuda menyusuri rute jalanan utama desa pada siang hari.',
        cast: 'Pemuda Kreatif Dusun & Karang Taruna',
        status: 'Agenda Tahunan'
      },
      {
        id: 's1e3',
        season: 1,
        episode: 3,
        title: 'Pentas Orkes Musik Pop / Dangdut',
        date: '30 Agustus 2026',
        duration: 'Malam Resepsi',
        dusun: 'RTH (Ruang Terbuka Hijau) Purwoasri',
        image: 'assets/img/kegiatan-voli.webp',
        match: '97% Cocok',
        tags: ['Orkes Dangdut', 'Pentas Musik', 'RTH Purwoasri'],
        desc: 'Hiburan panggung rakyat pada malam resepsi kemerdekaan yang diselenggarakan di area terbuka Ruang Terbuka Hijau (RTH) Purwoasri dengan semarak ribuan warga.',
        cast: 'Panitia Desa & Musisi Lokal Purwoasri',
        status: 'Malam Puncak Kemerdekaan'
      }
    ],

    2: [ // Season 2: Program Kaderisasi Pelajar & Penguatan Kepemudaan (IPNU & IPPNU)
      {
        id: 's2e1',
        season: 2,
        episode: 1,
        title: 'Sosialisasi Penguatan Organisasi IPNU-IPPNU',
        date: '15 Maret 2026',
        duration: 'Kapasitas Kader',
        dusun: 'Balai Pertemuan Pemuda',
        image: 'assets/img/kegiatan-bimbel.webp',
        match: '99% Cocok',
        tags: ['IPNU-IPPNU', 'Kaderisasi', 'Kolaborasi KKN'],
        desc: 'Agenda internal peningkatan kapasitas kepengurusan bagi Pimpinan Ranting (PR) IPNU-IPPNU Purwoasri yang sering berkolaborasi dengan mahasiswa KKN.',
        cast: 'PR IPNU-IPPNU Purwoasri & Mahasiswa KKN',
        status: 'Kaderisasi Terjadwal'
      },
      {
        id: 's2e2',
        season: 2,
        episode: 2,
        title: 'Kajian Literasi Kitab Kuning (Risālatul Maḥīḍ)',
        date: '10 Mei 2026',
        duration: 'Edukasi Fikih',
        dusun: 'Dusun Kalisari',
        image: 'assets/img/kegiatan-pengajian.webp',
        match: '98% Cocok',
        tags: ['Kitab Kuning', 'Risalatul Mahid', 'Fikih Remaja'],
        desc: 'Program edukasi keagamaan khusus untuk remaja putri IPPNU dan IPNU di Purwoasri mengenai fikih wanita/haid sebagai bekal ibadah harian.',
        cast: 'Ustadzah Pembina & Pengurus IPPNU Purwoasri',
        status: 'Kajian Berkala'
      },
      {
        id: 's2e3',
        season: 2,
        episode: 3,
        title: 'Bakti Sosial Pemuda & Bagi Takjil Ramadhan',
        date: '25 Maret 2026',
        duration: 'Aksi Turun Jalan',
        dusun: 'Dusun Tegalsari Kidul',
        image: 'assets/img/kegiatan-bagi-takjil.webp',
        match: '99% Cocok',
        tags: ['Bagi Takjil', 'Bakti Sosial', 'Ramadan'],
        desc: 'Aksi turun ke jalan oleh pemuda lintas dusun, seperti membagikan takjil gratis kepada pengguna jalan di wilayah Dusun Tegalsari Kidul saat bulan Ramadan.',
        cast: 'Kader Muda IPNU-IPPNU & Relawan Dusun',
        status: 'Selesai Dilaksanakan'
      }
    ],

    3: [ // Season 3: Program Rutinan Keagamaan & Jam\'iyah Pembinaan Mental
      {
        id: 's3e1',
        season: 3,
        episode: 1,
        title: 'Rutinan Mengaji Majelis Rabu Kliwon',
        date: '18 Februari 2026',
        duration: 'Majelis Taklim',
        dusun: 'Bergilir Antar-Mushola Dusun',
        image: 'assets/img/kegiatan-pengajian.webp',
        match: '99% Cocok',
        tags: ['Rabu Kliwon', 'Majelis Taklim', 'Tafsir & Fikih'],
        desc: 'Majelis taklim berkala berupa pengajian fikih/tafsir dan doa bersama yang digilir secara istiqamah antar-mushola atau rumah warga.',
        cast: 'Kyai Kampung, Ustadz & Jamaah Warga',
        status: 'Rutin Bergilir'
      },
      {
        id: 's3e2',
        season: 3,
        episode: 2,
        title: 'Khotmil Qur\'an 30 Juz Berkala',
        date: '12 April 2026',
        duration: 'Khataman Al-Qur\'an',
        dusun: 'Yayasan An-Nur Purwoasri',
        image: 'assets/img/kegiatan-pengajian.webp',
        match: '98% Cocok',
        tags: ['Khotmil Quran', 'Yayasan An-Nur', 'Spiritual'],
        desc: 'Agenda pembacaan Al-Qur\'an 30 juz hingga khatam yang dikoordinasikan oleh lembaga keagamaan desa (seperti Yayasan An-Nur Purwoasri).',
        cast: 'Hafidz/Hafidzah & Pengurus Yayasan An-Nur',
        status: 'Agenda Berkala'
      },
      {
        id: 's3e3',
        season: 3,
        episode: 3,
        title: 'Lailatul Ijtima\' dan Sholawat Bersama',
        date: '20 Juni 2026',
        duration: 'Malam Zikir & Sholawat',
        dusun: 'Masjid & Halaman Desa',
        image: 'assets/img/kegiatan-pengajian.webp',
        match: '99% Cocok',
        tags: ['Lailatul Ijtima', 'Mahabatunnabi', 'Hadrah'],
        desc: 'Episode malam zikir dan selawat (bersama grup hadrah Mahabatunnabi) yang ditujukan sebagai sarana silaturahmi warga desa.',
        cast: 'Grup Hadrah Mahabatunnabi & Pengurus Desa',
        status: 'Gema Selawat Desa'
      }
    ],

    4: [ // Season 4: Program Pelestarian Adat, Kebudayaan, & Ritual Nusantara
      {
        id: 's4e1',
        season: 4,
        episode: 1,
        title: 'Grebeg Suro Joglo Merah Putih Nuswantoro',
        date: '15 Juli 2026',
        duration: 'Festival Adat Jawa',
        dusun: 'Situs Joglo Merah Putih Purwoasri',
        image: 'assets/img/kegiatan-grebeg-suro.webp',
        match: '100% Cocok',
        tags: ['Grebeg Suro', 'Joglo Merah Putih', 'Reog', 'Lintas Agama'],
        desc: 'Festival tahunan penanggalan Jawa yang dipusatkan di situs Joglo Merah Putih Purwoasri, biasanya jatuh pada hari sakral seperti Rabu Kliwon dan Kamis Legi. Kegiatannya meliputi pagelaran seni Reog dan doa lintas agama.',
        cast: 'Sesepuh Adat, Pelaku Seni Reog & Lintas Agama',
        status: 'Festival Sakral Tahunan'
      },
      {
        id: 's4e2',
        season: 4,
        episode: 2,
        title: 'Edukasi Sejarah Padepokan Alang-Alang Kumitir',
        date: '05 Oktober 2026',
        duration: 'Pembelajaran Budaya',
        dusun: 'Padepokan Seni Alang-Alang Kumitir',
        image: 'assets/img/kegiatan-lingkungan-alam.webp',
        match: '97% Cocok',
        tags: ['Alang-Alang Kumitir', 'Penyangga Alas Purwo', 'Sejarah Seni'],
        desc: 'Episode pembelajaran sejarah pementasan budaya lokal yang dikelola langsung oleh Padepokan Seni Alang-Alang Kumitir Purwoasri bagi generasi muda dan mahasiswa.',
        cast: 'Pengelola Padepokan Alang-Alang Kumitir',
        status: 'Edukasi Terbuka'
      },
      {
        id: 's4e3',
        season: 4,
        episode: 3,
        title: 'Ritual Keagamaan Pagerwesi Lingkar Alas Purwo',
        date: '02 Desember 2026',
        duration: 'Ibadah Berkala',
        dusun: 'Area Lingkar Alas Purwo',
        image: 'assets/img/kegiatan-grebeg-suro.webp',
        match: '98% Cocok',
        tags: ['Pagerwesi', 'Umat Hindu', 'Rabu Kliwon Sinta', 'Alas Purwo'],
        desc: 'Khusus bagi umat Hindu di area lingkar Alas Purwo, ritual ibadah ini dilaksanakan berkala setiap hari Rabu Kliwon wuku Sinta.',
        cast: 'Pemangku Adat & Umat Hindu Purwoasri',
        status: 'Ritual Suci'
      }
    ],

    5: [ // Season 5: Program Bakti Sosial & Kesehatan Masyarakat
      {
        id: 's5e1',
        season: 5,
        episode: 1,
        title: 'Pengobatan & Pemeriksaan Kesehatan Gratis',
        date: '14 Februari 2026',
        duration: 'Layanan Keliling',
        dusun: 'Dusun-Dusun Terpencil Purwoasri',
        image: 'assets/img/kegiatan-kesehatan.webp',
        match: '99% Cocok',
        tags: ['Cek Kesehatan', 'Lansia', 'Pengobatan Gratis'],
        desc: 'Layanan cek kesehatan keliling tanpa biaya untuk menyasar warga lansia di dusun-dusun terpencil.',
        cast: 'Tim Medis Relawan, Pemdes & Yayasan Sosial',
        status: 'Layanan Jemput Bola'
      },
      {
        id: 's5e2',
        season: 5,
        episode: 2,
        title: 'Khitanan Massal Gratis Pemuda Purwoasri',
        date: '21 Juni 2026',
        duration: 'Bakti Kemanusiaan',
        dusun: 'Balai Desa Purwoasri',
        image: 'assets/img/kegiatan-kesehatan.webp',
        match: '99% Cocok',
        tags: ['Khitanan Massal', 'Keluarga Prasejahtera', 'Bansos'],
        desc: 'Khitanan gratis bagi anak-anak dari keluarga kurang mampu di Purwoasri.',
        cast: 'Pemerintah Desa, Nakes & Pemuda Purwoasri',
        status: 'Bakti Sosial Massal'
      },
      {
        id: 's5e3',
        season: 5,
        episode: 3,
        title: 'Edukasi Parenting & Pencegahan Stunting',
        date: '08 September 2026',
        duration: 'Sosialisasi Gizi',
        dusun: 'Posyandu Desa Purwoasri',
        image: 'assets/img/kegiatan-kesehatan.webp',
        match: '97% Cocok',
        tags: ['Parenting', 'Tekan Stunting', 'Gizi Anak'],
        desc: 'Sosialisasi pola asuh anak bagi ibu-ibu muda untuk menekan angka stunting.',
        cast: 'Bidan Desa & Kader Posyandu',
        status: 'Sosialisasi Berkelanjutan'
      },
      {
        id: 's5e4',
        season: 5,
        episode: 4,
        title: 'Gotong Royong Terintegrasi Bersama Koramil Tegaldlimo',
        date: '18 Oktober 2026',
        duration: 'Karya Bakti Sinergis',
        dusun: 'Fasilitas Publik Pelayanan Desa',
        image: 'assets/img/kegiatan-koramil-gotong.webp',
        match: '100% Cocok',
        tags: ['Koramil Tegaldlimo', 'Kerja Bakti', 'Gotong Royong'],
        desc: 'Aksi berkala pembangunan fasilitas publik pelayanan desa yang dilakukan warga bahu-membahu bersama anggota Koramil Tegaldlimo.',
        cast: 'Warga Purwoasri & Anggota Koramil Tegaldlimo',
        status: 'Sinergi TNI & Warga'
      }
    ]
  };

  // =======================================================
  // 2. TOAST NOTIFICATION UTILITY
  // =======================================================
  let toastEl = document.querySelector('#netflixToast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'netflixToast';
    toastEl.className = 'netflix-toast';
    toastEl.innerHTML = '<i class="bi bi-info-circle-fill text-danger fs-5"></i> <span id="toastMsg">Pesan</span>';
    document.body.appendChild(toastEl);
  }

  function showToast(message) {
    const msgSpan = toastEl.querySelector('#toastMsg');
    if (msgSpan) msgSpan.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  // =======================================================
  // 4. SISTEM "DAFTAR SAYA" (MY LIST) VIA LOCALSTORAGE
  // =======================================================
  const STORAGE_KEY = 'pemuda_purwoasri_mylist';

  function getMyList() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function saveMyList(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }
    updateMyListUI();
  }

  function toggleMyListItem(item) {
    let list = getMyList();
    const index = list.findIndex(i => i.id === item.id);
    if (index > -1) {
      list.splice(index, 1);
      saveMyList(list);
      showToast(`"${item.title}" dihapus dari Daftar Saya.`);
      return false;
    } else {
      list.push(item);
      saveMyList(list);
      showToast(`"${item.title}" ditambahkan ke Daftar Saya!`);
      return true;
    }
  }

  function isItemInMyList(id) {
    const list = getMyList();
    return list.some(i => i.id === id);
  }

  function updateMyListUI() {
    const list = getMyList();
    const countBadge = document.querySelector('#myListCount');
    if (countBadge) {
      countBadge.textContent = list.length;
      countBadge.style.display = list.length > 0 ? 'inline-block' : 'none';
    }

    const drawerBody = document.querySelector('#myListContainer');
    if (drawerBody) {
      if (list.length === 0) {
        drawerBody.innerHTML = `
          <div class="text-center py-5 text-muted">
            <i class="bi bi-bookmark-heart fs-1 text-danger d-block mb-3"></i>
            <h6 class="text-white">Daftar Saya Masih Kosong</h6>
            <p class="small">Klik tombol <strong>+ Daftar Saya</strong> pada episode atau kegiatan untuk menyimpan ke daftar favorit Anda.</p>
          </div>
        `;
      } else {
        drawerBody.innerHTML = list.map(item => `
          <div class="mylist-item-card">
            <img src="${item.image}" alt="${item.title}">
            <div class="flex-grow-1 overflow-hidden">
              <div class="small fw-bold text-white text-truncate">${item.title}</div>
              <div class="text-danger small" style="font-size:0.75rem;">Season ${item.season} • Episode ${item.episode}</div>
              <div class="text-muted" style="font-size:0.72rem;">${item.dusun || 'Desa Purwoasri'}</div>
            </div>
            <div class="d-flex flex-column gap-1">
              <button class="btn btn-sm btn-outline-light p-1 px-2 btn-open-item-modal" data-item-id="${item.id}" title="Lihat Foto & Detail">
                <i class="bi bi-eye-fill"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger p-1 px-2 btn-remove-mylist" data-item-id="${item.id}" title="Hapus">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        `).join('');

        // Bind delete buttons
        drawerBody.querySelectorAll('.btn-remove-mylist').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.itemId;
            const target = list.find(i => i.id === id);
            if (target) toggleMyListItem(target);
          });
        });

        // Bind open item modal
        drawerBody.querySelectorAll('.btn-open-item-modal').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.itemId;
            const target = findEpisodeById(id);
            if (target) openEpisodeModal(target);
          });
        });
      }
    }
  }

  function findEpisodeById(id) {
    for (const s in EPISODES_DATA) {
      const found = EPISODES_DATA[s].find(ep => ep.id === id);
      if (found) return found;
    }
    return null;
  }

  // =======================================================
  // 5. RENDER EPISODE CARDS GRID (AS IN USER'S REFERENCE)
  // =======================================================
  let currentSeason = 1;

  function renderEpisodesGrid(seasonNum) {
    const gridContainer = document.querySelector('#episodesGridContainer');
    if (!gridContainer) return;

    const episodes = EPISODES_DATA[seasonNum] || EPISODES_DATA[1];
    currentSeason = seasonNum;

    gridContainer.innerHTML = episodes.map(ep => {
      const inList = isItemInMyList(ep.id);
      return `
        <div class="episode-card" data-episode-id="${ep.id}">
          <div class="episode-thumb-wrap">
            <img src="${ep.image}" alt="${ep.title}" loading="lazy" />
            <div class="episode-play-overlay">
              <i class="bi bi-zoom-in text-white fs-3"></i>
            </div>
          </div>
          <div class="episode-info">
            <div class="episode-header-line">
              <div class="episode-number">Episode ${ep.episode}</div>
              <div class="episode-date">${ep.date}</div>
            </div>
            <div class="episode-title">${ep.title}</div>
            <p class="episode-desc">${ep.desc}</p>
            <div class="episode-actions-mini">
              <button type="button" class="btn-card-action btn-preview-ep" data-id="${ep.id}">
                <i class="bi bi-image me-1"></i> Lihat Foto
              </button>
              <button type="button" class="btn-card-action btn-save-ep" data-id="${ep.id}">
                <i class="bi ${inList ? 'bi-check-lg text-success' : 'bi-plus-lg'} me-1"></i> ${inList ? 'Tersimpan' : 'Daftar Saya'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind click events on card and buttons
    gridContainer.querySelectorAll('.episode-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-save-ep')) return; // handled separately
        const id = card.dataset.episodeId;
        const ep = findEpisodeById(id);
        if (ep) openEpisodeModal(ep);
      });
    });

    gridContainer.querySelectorAll('.btn-save-ep').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const ep = findEpisodeById(id);
        if (ep) {
          const added = toggleMyListItem(ep);
          btn.innerHTML = `<i class="bi ${added ? 'bi-check-lg text-success' : 'bi-plus-lg'} me-1"></i> ${added ? 'Tersimpan' : 'Daftar Saya'}`;
        }
      });
    });
  }

  // Season Pills Switcher
  const seasonPills = document.querySelectorAll('.season-pill-btn');
  seasonPills.forEach(pill => {
    pill.addEventListener('click', () => {
      seasonPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const sNum = parseInt(pill.dataset.season, 10) || 1;
      renderEpisodesGrid(sNum);
    });
  });

  // =======================================================
  // 6. NETFLIX TABS SWITCHER (OVERVIEW, EPISODES, MORE, DETAILS)
  // =======================================================
  const tabButtons = document.querySelectorAll('.netflix-tab-btn');
  const tabPanes = document.querySelectorAll('.netflix-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.targetTab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.add('d-none'));

      btn.classList.add('active');
      const targetPane = document.querySelector(`#${targetId}`);
      if (targetPane) {
        targetPane.classList.remove('d-none');
      }
    });
  });

  // =======================================================
  // 7. NETFLIX MODAL PREVIEW & PLAYER SIMULATOR
  // =======================================================
  const modalElement = document.querySelector('#netflixDetailModal');
  let bsModal = null;
  if (modalElement && window.bootstrap) {
    bsModal = new bootstrap.Modal(modalElement);
  }

  function openEpisodeModal(ep) {
    if (!modalElement) return;

    // Fill Modal Data
    const modalHero = modalElement.querySelector('#modalHeroBg');
    const modalTitle = modalElement.querySelector('#modalTitle');
    const modalMatch = modalElement.querySelector('#modalMatch');
    const modalSeasonEp = modalElement.querySelector('#modalSeasonEp');
    const modalDusun = modalElement.querySelector('#modalDusun');
    const modalDesc = modalElement.querySelector('#modalDesc');
    const modalCast = modalElement.querySelector('#modalCast');
    const modalTags = modalElement.querySelector('#modalTags');
    const modalWaBtn = modalElement.querySelector('#modalWaAction');
    const modalSaveBtn = modalElement.querySelector('#modalSaveBtn');

    if (modalHero) modalHero.src = ep.image;
    if (modalTitle) modalTitle.textContent = ep.title;
    if (modalMatch) modalMatch.textContent = ep.match || '98% Cocok';
    if (modalSeasonEp) modalSeasonEp.textContent = `Season ${ep.season} • Episode ${ep.episode} (${ep.date})`;
    if (modalDusun) modalDusun.textContent = ep.dusun || 'Desa Purwoasri';
    if (modalDesc) modalDesc.textContent = ep.desc;
    if (modalCast) modalCast.textContent = ep.cast || 'Pengurus & Pemuda Purwoasri';

    if (modalTags) {
      modalTags.innerHTML = (ep.tags || []).map(t => `<span class="tag-pill me-1 mb-1">#${t}</span>`).join('');
    }

    if (modalWaBtn) {
      const pesan = `Halo Pengurus Pemuda Purwoasri, saya tertarik dengan kegiatan *"${ep.title}"* (Season ${ep.season}, Ep ${ep.episode} - ${ep.dusun}).\n\nBisa minta informasi detail atau jadwal pelaksanaan terdekatnya? Terima kasih! 🙏`;
      modalWaBtn.href = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
    }

    if (modalSaveBtn) {
      const inList = isItemInMyList(ep.id);
      modalSaveBtn.innerHTML = `<i class="bi ${inList ? 'bi-check-lg text-success' : 'bi-plus-lg'} me-1"></i> ${inList ? 'Tersimpan di Daftar Saya' : 'Tambah ke Daftar Saya'}`;
      modalSaveBtn.onclick = () => {
        const added = toggleMyListItem(ep);
        modalSaveBtn.innerHTML = `<i class="bi ${added ? 'bi-check-lg text-success' : 'bi-plus-lg'} me-1"></i> ${added ? 'Tersimpan di Daftar Saya' : 'Tambah ke Daftar Saya'}`;
      };
    }

    if (bsModal) {
      bsModal.show();
    }
  }

  // Bind all clickable poster cards to open modal
  document.querySelectorAll('.netflix-poster-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.episodeId;
      if (id) {
        const ep = findEpisodeById(id);
        if (ep) openEpisodeModal(ep);
      }
    });
  });

  // Featured Hero Modal Trigger
  const btnHeroInfo = document.querySelector('#btnHeroMoreInfo');
  if (btnHeroInfo) {
    btnHeroInfo.addEventListener('click', () => {
      const featured = findEpisodeById('s1e1') || EPISODES_DATA[1][0];
      if (featured) openEpisodeModal(featured);
    });
  }

  // =======================================================
  // 8. HORIZONTAL ROW CAROUSEL SCROLL BUTTONS
  // =======================================================
  document.querySelectorAll('.row-scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rowTrack = btn.parentElement.querySelector('.row-carousel-track');
      if (rowTrack) {
        const scrollAmount = btn.classList.contains('prev') ? -350 : 350;
        rowTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });

  // =======================================================
  // 9. NAVBAR SCROLL EFFECT
  // =======================================================
  const header = document.querySelector('#netflixHeader');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  // =======================================================
  // 10. LIVE SEARCH BAR MODAL
  // =======================================================
  const searchInput = document.querySelector('#netflixSearchInput');
  const searchResults = document.querySelector('#netflixSearchResults');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = '<div class="text-center text-muted py-4">Ketik judul program, kegiatan, dusun, atau topik olahraga/UMKM...</div>';
        return;
      }

      let allEps = [];
      for (const s in EPISODES_DATA) {
        allEps = allEps.concat(EPISODES_DATA[s]);
      }

      const filtered = allEps.filter(ep => 
        ep.title.toLowerCase().includes(query) ||
        ep.desc.toLowerCase().includes(query) ||
        ep.dusun.toLowerCase().includes(query) ||
        (ep.tags && ep.tags.some(t => t.toLowerCase().includes(query)))
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = `<div class="text-center text-muted py-4"><i class="bi bi-search fs-3 text-danger d-block mb-2"></i>Tidak ada kegiatan yang cocok dengan "<strong>${query}</strong>"</div>`;
      } else {
        searchResults.innerHTML = filtered.map(ep => `
          <div class="mylist-item-card btn-search-item" data-id="${ep.id}" style="cursor:pointer;">
            <img src="${ep.image}" alt="${ep.title}">
            <div class="flex-grow-1 overflow-hidden">
              <div class="small fw-bold text-white text-truncate">${ep.title}</div>
              <div class="text-danger small" style="font-size:0.75rem;">Season ${ep.season} • Episode ${ep.episode}</div>
              <div class="text-muted small" style="font-size:0.72rem;">${ep.dusun} - ${ep.duration}</div>
            </div>
            <button class="btn btn-sm btn-outline-danger px-2" title="Lihat Foto"><i class="bi bi-eye-fill"></i></button>
          </div>
        `).join('');

        searchResults.querySelectorAll('.btn-search-item').forEach(item => {
          item.addEventListener('click', () => {
            const id = item.dataset.id;
            const ep = findEpisodeById(id);
            if (ep) {
              // Hide search modal if open
              const searchModalEl = document.querySelector('#searchModal');
              if (searchModalEl && window.bootstrap) {
                const searchModal = bootstrap.Modal.getInstance(searchModalEl);
                if (searchModal) searchModal.hide();
              }
              openEpisodeModal(ep);
            }
          });
        });
      }
    });
  }

  // =======================================================
  // 11. FORM HANDLERS (WHATSAPP DIRECT)
  // =======================================================

  // Form Relawan Pemuda Purwoasri
  const formRelawan = document.querySelector('#formRelawan');
  if (formRelawan) {
    formRelawan.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.querySelector('#relawanNama')?.value || '-';
      const dusun = document.querySelector('#relawanDusun')?.value || '-';
      const wa = document.querySelector('#relawanWA')?.value || '-';
      const minat = document.querySelector('#relawanMinat')?.value || '-';
      const pesanTambahan = document.querySelector('#relawanPesan')?.value || '-';

      const pesan = `Halo Pengurus Pemuda Purwoasri, saya ingin bergabung menjadi Relawan / Anggota:\n\n` +
                    `🎬 *Nama Lengkap*: ${nama}\n` +
                    `📍 *Asal Dusun*: Dusun ${dusun}, Desa Purwoasri\n` +
                    `📱 *Nomor WhatsApp*: ${wa}\n` +
                    `🎯 *Minat Divisi*: ${minat}\n` +
                    `💬 *Motivasi*: "${pesanTambahan}"\n\n` +
                    `Mohon arahan dan info kegiatan selanjutnya. Terima kasih! 🙏`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
      showToast('Membuka WhatsApp untuk pendaftaran...');
    });
  }

  // Form Aspirasi Warga
  const formAspirasi = document.querySelector('#formAspirasi');
  if (formAspirasi) {
    formAspirasi.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.querySelector('#namaAspirasi')?.value || 'Warga Purwoasri';
      const dusun = document.querySelector('#dusunAspirasi')?.value || '-';
      const kategori = document.querySelector('#kategoriAspirasi')?.value || 'Aspirasi Umum';
      const rating = document.querySelector('input[name="ratingWarga"]:checked')?.value || '5/5';
      const isi = document.querySelector('#isiAspirasi')?.value || '-';

      const pesan = `Halo Pengurus Pemuda Purwoasri, saya ingin menyampaikan Aspirasi & Ulasan Warga:\n\n` +
                    `👤 *Nama*: ${nama}\n` +
                    `📍 *Dusun*: Dusun ${dusun}\n` +
                    `⭐ *Rating Kepuasan*: ${rating} Bintang\n` +
                    `📌 *Topik*: ${kategori}\n` +
                    `📝 *Pesan / Usulan*:\n"${isi}"\n\n` +
                    `Semoga bisa menjadi pertimbangan demi kemajuan Desa Purwoasri. Terima kasih!`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
      showToast('Aspirasi Anda diteruskan ke WhatsApp pengurus...');
    });
  }

  // Form Kontak / Tanya Pengurus
  const formKontak = document.querySelector('#formKontak');
  if (formKontak) {
    formKontak.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.querySelector('#namaKontak')?.value || '-';
      const subjek = document.querySelector('#subjekKontak')?.value || 'Konsultasi';
      const pesanTeks = document.querySelector('#pesanKontak')?.value || '-';

      const pesan = `Halo Sekretariat Pemuda Purwoasri,\n\n` +
                    `👤 *Nama*: ${nama}\n` +
                    `📌 *Hal / Subjek*: ${subjek}\n` +
                    `💬 *Pesan*:\n"${pesanTeks}"\n\n` +
                    `Mohon informasinya. Terima kasih!`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
    });
  }

  // =======================================================
  // 12. ROLLBACK / SCROLL TO TOP FLOATING BUTTON
  // =======================================================
  const scrollTopBtn = document.querySelector('#scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =======================================================
  // INITIALIZE
  // =======================================================
  renderEpisodesGrid(1);
  updateMyListUI();
});
