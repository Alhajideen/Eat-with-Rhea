const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const myBtns = [hamburger, closeX];

myBtns.forEach((e) => {
  e.addEventListener('click', () => {
    dropdown.classList.toggle('visible-menu');
    dropdown.classList.toggle('hidden');
  });
});
