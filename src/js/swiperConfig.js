import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

new Swiper('#hero .swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#hero .swiper-pagination',
    clickable: true,
  },
});

new Swiper('#offer .swiper', {
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '#offer .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

new Swiper('#achieve .swiper', {
  modules: [Autoplay],
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

new Swiper('#reviews .swiper', {
  modules: [Autoplay, Navigation],
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: '#reviews .swiper-button-next',
    prevEl: '#reviews .swiper-button-prev',
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
  },
  on: {
    slideChange: function () {
      const untitled = document.querySelector('#reviews .icon-untitled');
      untitled.classList.remove('animate-button');
      setTimeout(() => {
        untitled.classList.add('animate-button');
      }, 100);
    },
  },
});
