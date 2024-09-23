export const menu = (function () {
    const menuPage = document.createElement('div');
    const menuTabs = document.querySelectorAll('.menu');
    const main = document.querySelector('.main');
    menuPage.classList.add('menu-page');
    menuPage.textContent = 'MENUS';

    menuTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            main.appendChild(menuPage)
        })
    })

})()