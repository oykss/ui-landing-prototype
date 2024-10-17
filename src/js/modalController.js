import { modalForm, modalThanks } from './form';

const listBtnOpen = document.querySelectorAll('.btn-open');
const listBtnClose = document.querySelectorAll('.btn-close');

listBtnOpen.forEach(btnOpen => {
  btnOpen.addEventListener('click', () => {
    modalForm.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

listBtnClose.forEach(btnClose => {
  btnClose.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  });
});

[modalForm, modalThanks].forEach(modal =>
  modal.addEventListener('click', event => {
    if (event.target.classList.contains('is-open')) {
      modal.classList.remove('is-open');
      document.body.style.overflow = 'auto';
    }
  })
);
