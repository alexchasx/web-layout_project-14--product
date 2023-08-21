import vars from '../_vars';

let slidesPerView = 2;

if (window.matchMedia(vars.mediaMiniDesktop).matches) {
  slidesPerView = 3;
}

if (window.matchMedia(vars.mediaTablet).matches) {
  slidesPerView = 2;
}

if (window.matchMedia(vars.mediaMobile).matches) {
  slidesPerView = 1;
}

new Swiper('.js-swiper-useful', {
  slidesPerView: slidesPerView,
  spaceBetween: 32,
  navigation: {
    nextEl: '.my-swiper-button-next',
    prevEl: '.my-swiper-button-prev',
  },
});
