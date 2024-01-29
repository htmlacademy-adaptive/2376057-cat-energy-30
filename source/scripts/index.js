const slider = document.getElementById('slider');
const afterWrapper = document.querySelector('.example__slider-after-wrapper');

slider.addEventListener('input', () => {
  const value = slider.value;
  afterWrapper.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
