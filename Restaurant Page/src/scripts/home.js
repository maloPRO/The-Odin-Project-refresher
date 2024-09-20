import '../styles/home.css'


export const homeBody = document.createElement('div');
homeBody.classList.add('homeBody');

const slogan = document.createElement('div');
slogan.classList.add('slogan');
slogan.textContent = "Eat, Drink & Enjoy!"
homeBody.appendChild(slogan);



