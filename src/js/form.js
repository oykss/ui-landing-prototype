import validator, { isEmpty } from 'validator';

const formData = { name: '', email: '', phone: '' };
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
const forms = document.querySelectorAll('form');

export const modalThanks = document.getElementById('modal-thanks');
export const modalForm = document.getElementById('modal-form');

forms.forEach(form => {
  let { user_name, user_email, user_phone } = form.elements;

  if (savedData) {
    user_name.value = savedData.name;
    user_email.value = savedData.email;
    user_phone.value = savedData.phone;
  }

  form.addEventListener('input', event => {
    event.preventDefault();

    formData.name = user_name.value ?? '';
    formData.email = user_email.value ?? '';
    formData.phone = user_phone.value ?? '';

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const checkBox = form.querySelector('[type="checkbox"]').checked;
    const checkWrap = form.querySelector('.check-mark-wrap');

    const isValidation = validation(user_name, user_email, user_phone, checkBox, checkWrap);

    if (isValidation) {
      for (const key in formData) {
        formData[key] = '';
      }
      localStorage.removeItem('feedback-form-state');

      forms.forEach(form => form.reset());

      modalForm.classList.remove('is-open');
      modalThanks.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  });

  form.addEventListener('click', event => {
    // const getAria = event.target.getAttribute('aria-label');
    const getAria = event.target.dataset.action;

    if (event.target.nodeName !== 'svg' && event.target.nodeName !== 'use') {
      return;
    }
    switch (getAria.slice(6)) {
      case 'name':
        user_name.value = '';
        savedData.name = '';
        break;

      case 'email':
        user_email.value = '';
        savedData.email = '';
        break;

      case 'phone':
        user_phone.value = '';
        savedData.phone = '';
        break;

      default:
        break;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
  });
});

function validation(user_name, user_email, user_phone, check, checkWrap) {
  const validationMap = [
    {
      element: user_name,
      validation: !/\d/.test(user_name.value),
      empty: validator.isEmpty(user_name.value),
    },
    {
      element: user_email,
      validation: validator.isEmail(user_email.value),
      empty: validator.isEmpty(user_email.value),
    },
    {
      element: user_phone,
      validation: validator.isMobilePhone(user_phone.value, 'uk-UA'),
      empty: validator.isEmpty(user_phone.value),
    },
  ];

  if (validationMap.every(item => item.validation) && check) {
    return true;
  }

  validationMap.forEach(item => {
    if (item.empty) {
      item.element.nextElementSibling.nextElementSibling.classList.add('no-validity-input');
    }
    setTimeout(() => {
      item.element.nextElementSibling.nextElementSibling.classList.remove('no-validity-input');
    }, 2500);
  });

  validationMap.forEach(item => {
    if (!item.validation) {
      item.element.classList.add('no-validity-input');
    }
    setTimeout(() => {
      item.element.classList.remove('no-validity-input');
    }, 2500);
  });

  if (!check) {
    checkMark(checkWrap);
  }
  return false;
}

function checkMark(check) {
  check.classList.add('no-validity-checkbox');
  setTimeout(() => {
    check.classList.remove('no-validity-checkbox');
  }, 2500);
}
