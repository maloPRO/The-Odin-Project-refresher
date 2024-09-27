import './styles/input.css';
import { home } from './scripts/home';
import './scripts/locations';
import './scripts/menu';
import './scripts/contact';

const main = document.querySelector('.main');
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

main.appendChild(home.homeBody);

menuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
