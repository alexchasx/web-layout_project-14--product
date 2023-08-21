import { cropLine } from '../_functions';

const categoryTitle = document.querySelectorAll('.category__title');

categoryTitle.forEach((title) => {
  const normalizeText = cropLine(title.firstChild.nodeValue, 22);
  title.firstChild.nodeValue = normalizeText;
})
