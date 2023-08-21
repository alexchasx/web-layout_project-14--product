import Choices from 'choices.js';
import { cropLine } from '../_functions';

const categoryTitle = document.querySelectorAll('.header__region');
categoryTitle.forEach((text) => {
  const normalizeText = cropLine(text.firstChild.nodeValue, 25);
  text.firstChild.nodeValue = normalizeText;
})


const selectRegion = document.querySelector('.js-select-region');
new Choices(selectRegion, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom',
  duplicateItemsAllowed: false,
  itemSelectText: '',
  allowHTML: false,
});

const selectCategories = document.querySelector('.js-select-categories');
new Choices(selectCategories, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom',
  duplicateItemsAllowed: false,
  itemSelectText: '',
  allowHTML: false,
});

// Улучшаем доступность
selectRegion.closest('.choices').setAttribute('aria-label', 'Список регионов');
selectCategories
  .closest('.choices')
  .setAttribute('aria-label', 'Список категорий');

document.querySelectorAll('.choices__list').forEach((el) => {
  el.setAttribute('aria-label', 'Список');
});

document.querySelectorAll('[aria-selected=true]').forEach((el) => {
  el.removeAttribute('aria-selected');
});

document.querySelectorAll('[aria-expanded]').forEach((el) => {
  el.removeAttribute('aria-expanded');
});
