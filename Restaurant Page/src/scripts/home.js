import '../styles/home.css'
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';

export const homeBody = document.createElement('div');
homeBody.classList.add('homeBody');

const homeLeft = document.createElement('div');
homeLeft.classList.add('homeLeft');
homeBody.appendChild(homeLeft)

const homeRight = document.createElement('div');
homeRight.classList.add('homeRight');
homeBody.appendChild(homeRight)

const img1 = document.createElement('img');
img1.src = image1;
img1.classList.add('hmeImg', 'hmeImg1');
homeLeft.appendChild(img1);

const img2 = document.createElement('img');
img2.src = image2;
img2.classList.add('hmeImg', 'hmeImg2');
homeLeft.appendChild(img2);

const img3 = document.createElement('img');
img3.src = image3;
img3.classList.add('hmeImg', 'hmeImg3');
homeRight.appendChild(img3);

