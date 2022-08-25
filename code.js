(() => {
   let swiper = new Swiper(".hero__swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper__btn-next",
      prevEl: ".swiper__btn-prev",
    },
    thumbs: {
      swiper: swiper,
    },
   });

  })();