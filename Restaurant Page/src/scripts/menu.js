import '../styles/menu.css';
import image4 from '../assets/about-bg.jpg';
import image3 from '../assets/bg-1.jpg';
import image2 from '../assets/contacts-bg.jpg';
import image1 from '../assets/location-bg.jpg';

export const menu = (function () {
    const menuPage = document.createElement('div');
    const menuTabs = document.querySelectorAll('.menu');
    const main = document.querySelector('.main');
    menuPage.classList.add('menu-page');
    const images = [image1, image2, image3, image4];
    
    const mobileMenu = document.querySelector('.mobile-menu');

    menuTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            mobileMenu.classList.toggle('hidden')
            main.appendChild(menuPage)
        })
    })

    const menuHead = document.createElement('div');
    menuHead.classList.add('menu-head')
    menuHead.innerHTML = `
        <h4>MENUS<h4>
    `
    menuPage.appendChild(menuHead);

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuPage.appendChild(menuContent)
    
    menuContent.innerHTML = `
        <div class='menuType'>
            <button>FOOD MENU</button>
            <button>DRINK MENU</button>
        </div>
    `

    let idx = 0;
    menuHead.style.backgroundImage = `url(${images[idx]})`
    setInterval (() => {
        menuHead.style.backgroundImage = `url(${images[idx]})`;
        idx = (idx + 1) % images.length;
    }, 5000)


})()