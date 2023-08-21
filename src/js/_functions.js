import JustValidate from 'just-validate';

export const validateEmail = (formId, fieldId) => {
  const validation = new JustValidate(formId);

  validation.addField(fieldId, [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
      tooltip: {
        position: 'left',
      },
    },
  ]);
};

export const toggleModal = (modal, openBtn, closeBtn, showCallback = null) => {
  const shadow = document.querySelector('#shadow');
  const activeModalClass = 'modal--active';
  const activeShadowClass = 'shadow--active';

  let showModal = showCallback;
  if (showCallback === null) {
    showModal = () => {
      modal?.classList.add(activeModalClass);
      shadow?.classList.add(activeShadowClass);
    };
  }

  const hiddenModal = () => {
    modal?.classList.remove(activeModalClass);
    shadow?.classList.remove(activeShadowClass);
  };

  openBtn?.addEventListener('click', showModal);

  shadow?.addEventListener('click', hiddenModal);
  closeBtn?.addEventListener('click', hiddenModal);
};

export const cropLine = (string, length) => {
  let result = string;
  if (string.length > length) {
    result = string.substring(0, length - 3);
  }
  return result;
};
