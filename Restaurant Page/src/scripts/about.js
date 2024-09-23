import '../styles/about.css'

export const about = (function () {
    const aboutTabs = document.querySelectorAll('.about');
    const aboutPage = document.createElement('div');
    const main = document.querySelector('.main');
    const mobileMenu = document.querySelector('.mobile-menu');

    aboutPage.classList.add('about-page');

    aboutTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            mobileMenu.classList.toggle('hidden')
            main.appendChild(aboutPage)
        })
    })
})()