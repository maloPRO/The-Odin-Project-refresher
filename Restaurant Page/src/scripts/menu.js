import '../styles/menu.css';
import image4 from '../assets/about-bg.jpg';
import image3 from '../assets/bg-1.jpg';
import image2 from '../assets/contacts-bg.jpg';
import image1 from '../assets/location-bg.jpg';
import myMenu from '../assets/menu.json'

export const menu = (function () {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const menuTabs = document.querySelectorAll('.menu');
    const main = document.querySelector('.main');
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
            <button class='foodBtn'>FOOD MENU</button>
            <button class='drinkBtn'>DRINK MENU</button>
        </div>
    `

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('foodMenu');
    foodMenu.innerHTML = `
        <div class='menuTitle'>FOODS</div>
    `

    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('drinkMenu');
    drinkMenu.innerHTML = `
        <div class='menuTitle'>DRINKS</div>
    `
    
    menuContent.appendChild(foodMenu)

    foods.forEach((food) => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('foodCard');
        foodCard.innerHTML = `
            <div class='itemName'>${food.name}</div>
            <div class='itemDesc'>${food.description}</div>
            <div class='itemPrice'>$ ${food.price}</div>
        `
        foodMenu.appendChild(foodCard)
    });

    drinks.forEach((drink) => {
        const drinkCard = document.createElement('div');
        drinkCard.classList.add('drinkCard');
        drinkCard.innerHTML = `
            <div class='itemName'>${drink.name}</div>
            <div class='itemDesc'>${drink.description}</div>
            <div class='itemPrice'>$ ${drink.price}</div>
        `
        drinkMenu.appendChild(drinkCard)
    })

    let idx = 0;
    menuHead.style.backgroundImage = `url(${images[idx]})`
    setInterval (() => {
        menuHead.style.backgroundImage = `url(${images[idx]})`;
        idx = (idx + 1) % images.length;
    }, 5000)


})()