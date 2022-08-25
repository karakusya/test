import Swiper from 'swiper';

const swiper = new Swiper('.hero__slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  

    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },
  
   
  });