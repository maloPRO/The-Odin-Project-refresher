import './styles/input.css';
import { homeBody } from './scripts/home';

const main = document.querySelector('.main');
const menuButton = document.getElementById('menu-button');
const menuItems = document.querySelector('.menu-items');
const dev = document.querySelector('.dev');


main.appendChild(homeBody)


menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  homeBody.classList.toggle('hidden')
});