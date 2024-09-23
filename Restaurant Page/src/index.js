import './styles/input.css';
import { home } from './scripts/home';
import { locations } from './scripts/locations';
import { menu } from './scripts/menu';
import { about } from './scripts/about';
import { contacts } from './scripts/contact';

const main = document.querySelector('.main');
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.querySelector('.mobile-menu');


main.appendChild(home.homeBody)


menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  home.homeBody.classList.toggle('hidden');
});