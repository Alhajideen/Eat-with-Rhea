const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.mobile-dropdown');
const closeX = document.querySelector('.close-x');
const myBtns = [hamburger, closeX];
const staffContainer = document.querySelector('.staff-container');
const mobile = window.matchMedia('(min-width: 768px)');
const seeMore = document.querySelector('.see-more');
const seeLess = document.querySelector('.see-less');

const dynamicArr = [
  {
    id: 1,
    name: 'Omachi John',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_01.png',
  },
  {
    id: 2,
    name: 'Onoja Victor',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_02.png',
  },
  {
    id: 3,
    name: 'Iye Momoh Maria',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_03.png',
  },
  {
    id: 4,
    name: 'Salifu Abdulkareem',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_04.png',
  },
  {
    id: 5,
    name: 'Daniel James',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_05.png',
  },
  {
    id: 6,
    name: 'Jibo Halidu',
    topic: 'Lorem ipsum amet Nostrum, quibusdam!',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil',
    avatar: './assets/img/speaker_06.png',
  },
];

const displaySpeaker = () => {
  let displayAll = '';
  for (let i = 0; i < dynamicArr.length; i += 1) {
    displayAll += `
        <div class="staff-card d-flex">
          <figure class="staff-img">
            <img src="${dynamicArr[i].avatar}" alt="" />
          </figure>
          <div class="staff-details">
            <h3 class="staff-name h1">${dynamicArr[i].name}</h3>
            <h4 class="staff-desc">${dynamicArr[i].topic}</h4>
            <div class="line"></div>
            <p>
              <i
                >${dynamicArr[i].description}</i
              >
            </p>
          </div>
        </div>
`;
  }
  staffContainer.innerHTML = displayAll;
};

const mobileSpeaker = () => {
  let displayAll = '';
  for (let i = 0; i < 2; i += 1) {
    displayAll += `
        <div class="staff-card d-flex">
          <figure class="staff-img">
            <img src="${dynamicArr[i].avatar}" alt="" />
          </figure>
          <div class="staff-details">
            <h3 class="staff-name h1">${dynamicArr[i].name}</h3>
            <h4 class="staff-desc">${dynamicArr[i].topic}</h4>
            <div class="line"></div>
            <p>
              <i
                >${dynamicArr[i].description}</i
              >
            </p>
          </div>
        </div>
        
`;
  }
  staffContainer.innerHTML = displayAll;
};

window.addEventListener('load', () => {
  if (mobile.matches) {
    seeMore.style.display = 'none';
    seeLess.style.display = 'none';
    displaySpeaker();
  } else {
    mobileSpeaker();
    seeLess.style.display = 'none';
    seeMore.addEventListener('click', () => {
      displaySpeaker();
      seeMore.style.display = 'none';
      seeLess.style.display = 'block';
    });
    seeLess.addEventListener('click', () => {
      mobileSpeaker();
      seeMore.style.display = 'block';
      seeLess.style.display = 'none';
    });
  }
});

myBtns.forEach((e) => {
  e.addEventListener('click', () => {
    dropdown.classList.toggle('visible-menu');
    dropdown.classList.toggle('hidden');
  });
});
