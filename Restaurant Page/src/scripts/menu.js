import '../styles/menu.css';
import image4 from '../assets/about-bg.jpg';
import image3 from '../assets/bg-1.jpg';
import image2 from '../assets/contacts-bg.jpg';
import image1 from '../assets/location-bg.jpg';
import myMenu from '../assets/menu.json'

export const menu = (function () {
    const menuPage = document.createElement('div');
    const menuTabs = document.querySelectorAll('.menu');
    const main = document.querySelector('.main');
    menuPage.classList.add('menu-page');
    const images = [image1, image2, image3, image4];
    const foods = myMenu.menu.food;
    const drinks = myMenu.menu.beverages;

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

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('foodMenu');
    menuContent.appendChild(foodMenu)
    foodMenu.innerHTML = `
        <div class='menuTitle'>FOOD</div>
    `

    foods.forEach((food) => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('foodCard');
        foodCard.innerHTML = `
            <div class='foodName'>${food.name}</div>
            <div class='foodDesc'>${food.description}</div>
            <div class='foodPrice'>$ ${food.price}</div>
        `
        foodMenu.appendChild(foodCard)
    })

    let idx = 0;
    menuHead.style.backgroundImage = `url(${images[idx]})`
    setInterval (() => {
        menuHead.style.backgroundImage = `url(${images[idx]})`;
        idx = (idx + 1) % images.length;
    }, 5000)


})()