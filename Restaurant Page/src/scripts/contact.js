export const contacts = (function() {
    const contactTabs = document.querySelectorAll('.contacts');
    const contactPage = document.createElement('div');
    const main = document.querySelector('.main');
    const mobileMenu = document.querySelector('.mobile-menu');

    contactPage.classList.add('contact-page');
    contactPage.textContent = 'CONTACTS';

    contactTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const children = main.children;
            while (children.length > 1) {
                main.removeChild(children[1])
            }
            mobileMenu.classList.toggle('hidden');
            main.appendChild(contactPage)
        })
    })
})();