import action from '../images/action.jpg';
import frontieres from '../images/frontieres.jpg';
import hope from '../images/hope.jpg';
import medical from '../images/medical.jpg';
import razom from '../images/razom.jpg';
import save from '../images/save.jpg';
import sergiy from '../images/sergiy.jpg';
import united from '../images/united.jpg';
import vision from '../images/vision.jpg';
import action2x from '../images/action2x.jpg';
import frontieres2x from '../images/frontieres2x.jpg';
import hope2x from '../images/hope2x.jpg';
import medical2x from '../images/medical2x.jpg';
import razom2x from '../images/razom2x.jpg';
import save2x from '../images/save2x.jpg';
import sergiy2x from '../images/sergiy2x.jpg';
import united2x from '../images/united2x.jpg';
import vision2x from '../images/vision2x.jpg';

function generateDonateFundsMarkup(donateFunds) {
    const isRetina = window.devicePixelRatio > 1.1; //  if user has a retina display
  
    const markup = donateFunds
      .map((fund, index) => {
        const foundIndex = String(index + 1).padStart(2, '0');
        const foundImage = isRetina ? fund.retinaImg : fund.img;
        return `
          <li class="donate-fund">
            <span class="donate-index">${foundIndex}</span>
            <a href="${fund.url}" target="_blank" class='donate-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
            <img class="donate-img" src="${foundImage}" alt="${fund.title}" loading="lazy">
            </a>
          </li>
        `;
      })
      .join('');
    return markup;
  }
  
const donateFunds = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: save,
        retinaImg: save2x,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: hope,
        retinaImg: hope2x,
    },
    {
        title: 'International Medical   Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: medical,
        retinaImg: medical2x,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: razom,
        retinaImg: razom2x,
    },
    {
        title: 'Action against   hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: action,
        retinaImg: action2x,
    },
    {
        title: 'Sergiy Prytula Charity   Foundation',
        url: 'https://prytulafoundation.org/en',
        img: sergiy,
        retinaImg: sergiy2x,
    },
    {
        title: 'Medicins Sans   Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: frontieres,
        retinaImg: frontieres2x,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: united,
        retinaImg: united2x,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: vision,
        retinaImg: vision2x,
    },
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: save,
        retinaImg: save2x,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: hope,
        retinaImg: hope2x,
    },
    {
        title: 'International Medical   Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: medical,
        retinaImg: medical2x,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: razom,
        retinaImg: razom2x,
    },
    {
        title: 'Action against   hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: action,
        retinaImg: action2x,
    },
    {
        title: 'Sergiy Prytula Charity   Foundation',
        url: 'https://prytulafoundation.org/en',
        img: sergiy,
        retinaImg: sergiy2x,
    },
    {
        title: 'Medicins Sans   Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: frontieres,
        retinaImg: frontieres2x,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: united,
        retinaImg: united2x,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: vision,
        retinaImg: vision2x,
    },
];
  
  const container = document.querySelector('.donate-funds-list');
  container.insertAdjacentHTML(
    'beforeend',
    generateDonateFundsMarkup(donateFunds)
  );
  
  // Button function--------------------------------------
  const donateButton = document.querySelector('.donate-button');
  const donateButtonUp = document.querySelector('.donate-button-up');
  const donateFound = document.querySelector('.donate-funds-visible');
  
  donateButton.addEventListener('click', function () {
    donateButton.style.display = 'none';
    donateButtonUp.style.display = 'block';
  
      donateFound.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  });
  
  donateButtonUp.addEventListener('click', function () {
    donateButtonUp.style.display = 'none';
    donateButton.style.display = 'block';
  
    donateFound.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // Reverse button---------------------------------
  
  const donateFundsList = document.querySelector('.donate-funds-list');
  const intersectionObserver = new IntersectionObserver(function (entries) {
   
    if (entries[0].intersectionRatio <= 0) return;
  
    donateButtonUp.style.display = 'block';
    donateButton.style.display = 'none';
  });
  
  const intersectionObserver1 = new IntersectionObserver(function (entries) {
    
    if (entries[0].intersectionRatio <= 0) return;
  
    donateButtonUp.style.display = 'none';
    donateButton.style.display = 'block';
  });
  
  intersectionObserver.observe(donateFundsList.lastElementChild);
  intersectionObserver1.observe(donateFundsList.firstElementChild);