const images = document.querySelectorAll('.img-button');
const answers = document.querySelectorAll('.answer');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    answers[index].classList.toggle('active');
    image.src = image.src.includes('icon-plus.svg') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
  });
});