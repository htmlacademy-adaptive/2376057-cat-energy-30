let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.burger-toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('burger-toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
