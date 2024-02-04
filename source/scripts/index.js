const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.burger-toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('burger-toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
