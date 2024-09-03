let body = document.querySelector('body');
body.classList.add('body');

const title = document.createElement('div');
body.appendChild(title);
title.classList.add('title');
title.textContent = 'Etch-A-Sketch!'

const btnContainer = document.createElement('div');
body.appendChild(btnContainer);
btnContainer.classList.add('btnContainer');

const inpt = document.createElement('button');
btnContainer.appendChild(inpt);
inpt.classList.add('inpt');
inpt.innerHTML = 'Enter Sides';

let container = document.createElement('div');
container.classList.add('container');
let numBoxes = 2;
body.appendChild(container);


for (let i = 0; i < (numBoxes*numBoxes); i++) {
    let box = document.createElement('div');
    container.appendChild(box);

    box.classList.add('box');
}

const createSquares = (numBoxes) => {

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < (numBoxes*numBoxes); i++) {
        let box = document.createElement('div');
        container.appendChild(box);
    
        box.classList.add('box');
    }

    container.style = `grid-template-columns:repeat(${numBoxes}, minmax(0, 1fr));`;


    hover()
}

const hover = () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.classList.remove('bg-red-500');
            box.classList.add('bg-orange-400');
    })
})

}

inpt.addEventListener('click', () => {
    const sides = prompt('Enter Number of sides');
    createSquares(sides);
})

window.onload(createSquares(16))


