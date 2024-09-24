import '../styles/locations.css'

export const locations = (function () {
    const locTabs = document.querySelectorAll('.location');
    const locPage = document.createElement('div');
    const main = document.querySelector('.main');
    const mobileMenu = document.querySelector('.mobile-menu');

    locPage.classList.add('locations-page');

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
    
    const locHead = document.createElement('div');
    ;locHead.classList.add('loc-head')
    locHead.innerHTML = `
        <h4>LOCATION & HOURS<h4>
    `
    locPage.appendChild(locHead)

    const locContent = document.createElement('div');
    locContent.classList.add('loc-content');
    locContent.innerHTML = `
        <p class='adress'>14 Rue Cene </p>
        <p class='adress'>Karera 11, Gitega</p>
        <p class='adress'>Burundi</p>
        <p>OPEN EVERY DAY OF THE WEEK</P>
        <P>7AM - 8PM</P>
        <P>*(Hours may vary based on Musongati FC home games / other events)*</P>
    `
    locPage.appendChild(locContent)

})();