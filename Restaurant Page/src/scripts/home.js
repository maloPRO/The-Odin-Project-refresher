import '../styles/home.css'

export const home = (function () {
    const homeBody = document.createElement('div');
    const homeTab = document.querySelectorAll('.home');
    const main = document.querySelector('.main');
    homeBody.classList.add('homeBody');
    const mobileMenu = document.querySelector('.mobile-menu');

    homeTab.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            mobileMenu.classList.toggle('hidden')
            main.appendChild(homeBody);
        })
    })

    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.textContent = "Eat, Drink & Enjoy!"
    homeBody.appendChild(slogan);

    return { homeBody }
})()




