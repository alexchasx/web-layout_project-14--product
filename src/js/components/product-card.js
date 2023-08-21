import vars from '../_vars';
import { toggleModal } from '../_functions';
import JustValidate from 'just-validate';

const toggleModalBuy = () => {
  const modalBuy = document.querySelector('#modal-buy');
  const openBtnBuy = document.querySelector('.product__btn');
  const closeBtnBuy = modalBuy?.querySelector('.modal__close');

  toggleModal(modalBuy, openBtnBuy, closeBtnBuy);
};

const toggleModalThinks = () => {
  const modalThinks = document.querySelector('#modal-thanks');
  const modalBuy = document.querySelector('#modal-buy');
  const openBtnThinks = modalBuy?.querySelector('.form__submit');
  const closeBtnThinks = modalThinks?.querySelector('.modal__close');

  const activeModalClass = 'modal--active';
  const showCallback = () => {
    modalBuy?.classList.remove(activeModalClass);
    modalThinks?.classList.add(activeModalClass);
  };

  toggleModal(modalThinks, openBtnThinks, closeBtnThinks, showCallback);
};

const toggleModalImage = () => {
  const modalImage = document.querySelector('#modal-image');
  const openImage = document.querySelector('.product__img-big');
  const closeBtnImage = modalImage?.querySelector('.modal__close');

  toggleModal(modalImage, openImage, closeBtnImage);
};

const validateForm = () => {
  const productForm = document.querySelector('#product-form');
  if (productForm) {
    const validation = new JustValidate(productForm);

    validation
      .addField('#product-name', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
          tooltip: {
            position: 'top',
          },
        },
      ])
      .addField('#product-phone', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },
      ])
      .addField('#product-user-agreement', [
        {
          rule: 'required',
          errorMessage: 'Вы не приняли соглашение',
          tooltip: {
            position: 'top',
          },
        },
      ]);
  }
};

const slide = () => {
  const swiperModalImage = document.querySelector('.js-swiper-modal-image');
  if (swiperModalImage) {
    let slidesPerView = 4;

    if (window.matchMedia(vars.mediaMiniDesktop).matches) {
      slidesPerView = 3;
    }

    if (window.matchMedia(vars.mediaTablet).matches) {
      slidesPerView = 2;
    }

    if (window.matchMedia(vars.mediaMobile).matches) {
      slidesPerView = 1.5;
    }

    new Swiper('.js-swiper-modal-image', {
      slidesPerView: slidesPerView,
      spaceBetween: 78,
      navigation: {
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev',
      },
    });
  }
};

toggleModalBuy();
toggleModalThinks();
toggleModalImage();
validateForm();
slide();
