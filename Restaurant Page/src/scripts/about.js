export const about = (function () {
    const aboutTabs = document.querySelectorAll('.about');
    const aboutPage = document.createElement('div');
    const main = document.querySelector('.main');

    aboutPage.classList.add('about-page');
    aboutPage.textContent = 'ABOUT';

    aboutTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            main.appendChild(aboutPage)
        })
    })
})()