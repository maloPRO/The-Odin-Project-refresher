import './styles/input.css';
import { homeBody } from './scripts/home';

const main = document.querySelector('.main');
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const dev = document.querySelector('.dev');


main.appendChild(homeBody)


menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  homeBody.classList.toggle('hidden');
});