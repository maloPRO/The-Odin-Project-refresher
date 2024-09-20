import '../styles/home.css'


export const homeBody = document.createElement('div');
homeBody.classList.add('homeBody');

const homeLeft = document.createElement('div');
homeLeft.classList.add('homeLeft');
homeBody.appendChild(homeLeft)

const homeRight = document.createElement('div');
homeRight.classList.add('homeRight');
homeBody.appendChild(homeRight)

const leftTop = document.createElement('div');
leftTop.classList.add('leftTop');
homeLeft.appendChild(leftTop);

const leftBtm = document.createElement('div');
leftBtm.classList.add('leftBtm');
homeLeft.appendChild(leftBtm);



