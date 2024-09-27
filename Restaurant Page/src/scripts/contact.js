import '../styles/contacts.css';

export const contacts = (() => {
  const contactPage = createDiv('contact-page', `
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
  `);
  const main = document.querySelector('.main');
  const mobileMenu = document.querySelector('.mobile-menu');

  document.querySelectorAll('.contacts').forEach(tab => 
    tab.addEventListener('click', () => {
      clearChildren(main, 1);
      mobileMenu.classList.toggle('hidden');
      main.appendChild(contactPage);
    })
  );

  function createDiv(className, innerHTML = '') {
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerHTML = innerHTML;
    return div;
  }

  function clearChildren(parent, keep = 0) {
    while (parent.children.length > keep) parent.removeChild(parent.lastChild);
  }
})();
