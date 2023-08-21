import vars from '../_vars';

const slider = () => {
  let slidesPerView = 4;
  let gap = 32;

  if (window.matchMedia(vars.mediaMiniDesktop).matches) {
    slidesPerView = 3;
  }

  if (window.matchMedia(vars.mediaTablet).matches) {
    slidesPerView = 2;
  }

  if (window.matchMedia(vars.mediaMobile).matches) {
    gap = 16;
  }

  new Swiper('.js-swiper-similar', {
    slidesPerView: slidesPerView,
    spaceBetween: gap,
    navigation: {
      nextEl: '.my-swiper-button-next-similar',
      prevEl: '.my-swiper-button-prev-similar',
    },
  });
};

slider();
