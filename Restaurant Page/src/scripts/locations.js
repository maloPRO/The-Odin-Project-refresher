export const locations = (function () {
    const locTabs = document.querySelectorAll('.location');
    const locPage = document.createElement('div');
    const main = document.querySelector('.main');
    const mobileMenu = document.querySelector('.mobile-menu');

    locPage.classList.add('locations-page');
    locPage.textContent = 'LOCATIONS';

    locTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            mobileMenu.classList.toggle('hidden')
            main.appendChild(locPage);
        })
    })


})();