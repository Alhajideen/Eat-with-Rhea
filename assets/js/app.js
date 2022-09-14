const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const myBtns = [hamburger, closeX];

let dynamicArr = [
  {
    id: 1,
    name: 'Omachi John',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_01.png',
  },
  {
    id: 2,
    name: 'Onoja Victor',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_02.png',
  },
  {
    id: 3,
    name: 'Iye Momoh Maria',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_03.png',
  },
  {
    id: 4,
    name: 'Salifu Abdulkareem',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_04.png',
  },
  {
    id: 5,
    name: 'Daniel James',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_05.png',
  },
  {
    id: 6,
    name: 'Jibo Halidu',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: '../img/speaker_06.png',
  },
];

myBtns.forEach((e) => {
  e.addEventListener('click', () => {
    dropdown.classList.toggle('visible-menu');
    dropdown.classList.toggle('hidden');
  });
});
