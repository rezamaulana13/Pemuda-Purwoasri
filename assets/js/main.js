/**
 * Main JavaScript for Pemuda Purwoasri
 * Desa Purwoasri, Kec. Tegaldlimo, Kab. Banyuwangi
 * Static Website with Smart WhatsApp Direct Form Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const DEFAULT_WA_NUMBER = '6281234567890'; // Nomor WhatsApp Admin / Sekretariat Pemuda Purwoasri

  // 1. Scroll-top Button Logic
  const scrollTop = document.querySelector('#scrollTopBtn') || document.querySelector('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 250 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    };
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Navbar Scroll Glass Effect
  const navbar = document.querySelector('#mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Form Pendaftaran Relawan -> Direct ke WhatsApp
  const formRelawan = document.querySelector('#formRelawan');
  if (formRelawan) {
    formRelawan.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.querySelector('#relawanNama')?.value || '-';
      const dusun = document.querySelector('#relawanDusun')?.value || '-';
      const wa = document.querySelector('#relawanWA')?.value || '-';
      const minat = document.querySelector('#relawanMinat')?.value || '-';

      const pesan = `Halo Pengurus Pemuda Purwoasri, saya ingin mendaftar menjadi Relawan Pemuda Desa:\n\n` +
                    `👤 *Nama*: ${nama}\n` +
                    `📍 *Asal Dusun*: Dusun ${dusun}\n` +
                    `📱 *Nomor WA*: ${wa}\n` +
                    `🎯 *Minat Bidang*: ${minat}\n\n` +
                    `Mohon informasi kegiatan dan arahan selanjutnya. Terima kasih! 🙏`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 4. Form Aspirasi Warga -> Direct ke WhatsApp
  const formAspirasi = document.querySelector('#formAspirasi') || document.querySelector('form[action*="aspirasi"]');
  if (formAspirasi) {
    formAspirasi.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = formAspirasi.querySelector('input[name="nama"], #namaAspirasi')?.value || 'Warga Purwoasri';
      const dusun = formAspirasi.querySelector('select[name="dusun"], #dusunAspirasi')?.value || '-';
      const kategori = formAspirasi.querySelector('select[name="kategori"], #kategoriAspirasi')?.value || 'Aspirasi Umum';
      const isi = formAspirasi.querySelector('textarea[name="pesan"], textarea[name="aspirasi"], #isiAspirasi')?.value || '-';

      const pesan = `Halo Pengurus Pemuda Purwoasri, saya ingin menyampaikan Aspirasi/Usulan Warga:\n\n` +
                    `👤 *Nama*: ${nama}\n` +
                    `📍 *Dusun*: Dusun ${dusun}\n` +
                    `📌 *Topik*: ${kategori}\n` +
                    `📝 *Isi Aspirasi*:\n"${isi}"\n\n` +
                    `Semoga bisa menjadi bahan pertimbangan untuk kemajuan desa kita. Terima kasih!`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 5. Form Kontak / Konsultasi -> Direct ke WhatsApp
  const formKontak = document.querySelector('#formKontak') || document.querySelector('form[action*="kontak"]');
  if (formKontak) {
    formKontak.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = formKontak.querySelector('input[name="name"], input[name="nama"], #namaKontak')?.value || '-';
      const subjek = formKontak.querySelector('input[name="subject"], input[name="subjek"], #subjekKontak')?.value || 'Pertanyaan/Konsultasi';
      const pesanTeks = formKontak.querySelector('textarea[name="message"], textarea[name="pesan"], #pesanKontak')?.value || '-';

      const pesan = `Halo Sekretariat Pemuda Purwoasri,\n\n` +
                    `👤 *Nama*: ${nama}\n` +
                    `📌 *Hal / Subjek*: ${subjek}\n` +
                    `💬 *Pesan*:\n"${pesanTeks}"\n\n` +
                    `Mohon informasinya. Terima kasih!`;

      const waUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
      window.open(waUrl, '_blank');
    });
  }
});
