/**
 * Main JavaScript for Pemuda Purwoasri
 * Desa Purwoasri, Tegaldlimo, Banyuwangi
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Scroll-top Button Logic
  const scrollTop = document.querySelector('#scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 200 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
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

  // 2. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close others for clean accordion feel
          faqItems.forEach(el => el.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 3. Category Filter Functionality (for Kegiatan & Gallery)
  window.filterItems = function (category, btnElement) {
    const cards = document.querySelectorAll('.item-card');
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
      }
    });

    if (btnElement) {
      const allButtons = btnElement.parentElement.querySelectorAll('button');
      allButtons.forEach(btn => {
        btn.classList.remove('btn-success', 'active');
        btn.classList.add('btn-outline-success');
      });
      btnElement.classList.remove('btn-outline-success');
      btnElement.classList.add('btn-success', 'active');
    }
  };

  // 4. Navbar Scroll Glass Effect
  const navbar = document.querySelector('#mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    });
  }

  // 5. Swiper Slider Init (If Swiper Library loaded)
  if (typeof Swiper !== 'undefined') {
    new Swiper('.init-swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }

  // 6. GLightbox Init (If GLightbox loaded)
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }
});
