import { createPopper } from '@popperjs/core';
import JustValidate from 'just-validate';

const tooltip = () => {
  const button = document.querySelector('#feedback-button');
  const tooltip = document.querySelector('#feedback-tooltip');
  const arrow = document.querySelector('.feedback-arrow');

  if (button && tooltip) {
    createPopper(button, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 11],
          },
        },
        {
          name: 'arrow',
          options: {
            element: arrow,
          },
        },
      ],
    });

    button.addEventListener('click', () => {
      if (tooltip.style.opacity == 1) {
        tooltip.style.opacity = 0;
      } else {
        tooltip.style.opacity = 1;
      }
    });
  }
};

const validateForm = () => {
  const feedbackForm = document.querySelector('#feedback-form');
  if (feedbackForm) {
    const validation = new JustValidate(feedbackForm);

    validation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
          tooltip: {
            position: 'top',
          },
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели e-mail',
        },
        {
          rule: 'email',
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField('#user-agreement', [
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

tooltip();
validateForm();
