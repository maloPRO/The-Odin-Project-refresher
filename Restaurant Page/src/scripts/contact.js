import '../styles/contacts.css'

export const contacts = (function() {
    const contactTabs = document.querySelectorAll('.contacts');
    const contactPage = document.createElement('div');
    const main = document.querySelector('.main');
    const mobileMenu = document.querySelector('.mobile-menu');

    contactPage.classList.add('contact-page');

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

    contactPage.innerHTML = `
        <div class='contact-head'>CONTACT</div>
        <div class='content'>
            <div class='msg'>Send us a message and we will get back to you as soon as possible. Looking forward to hearing from you.</div>
            <form>
                <label>Name*<input type='text' required/></label>
                <label>Email*<input type='email' required/></label>
                <label>Phone Number*<input type='number' required/></label>
                <label>Your Message*<textarea type='text' required></textarea></label>
                <button type='submit'>SEND</button>
            </form>
        </div>
    `
})();