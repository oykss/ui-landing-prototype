document.querySelectorAll('.qustion-wrap').forEach(qustion => {
  qustion.addEventListener('click', function () {
    const parent = this.parentElement;
    parent.classList.toggle('active');
  });
});
