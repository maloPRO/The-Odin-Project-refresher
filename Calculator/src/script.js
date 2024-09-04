const numKeys = document.querySelectorAll('.numKey');
const funcKeys = document.querySelectorAll('.funcKey');
const opKeys = document.querySelectorAll('.opKey');
const equal = document.querySelector('.equal');
const del = document.querySelector('#del');
const clear = document.querySelector('#clear');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const keys = document.querySelectorAll('button');

numKeys.forEach((numKey) => {
    numKey.addEventListener('click', () => {
        input.textContent += numKey.id;
    })
})

opKeys.forEach((opKey) => {
    opKey.addEventListener('click', () => {
        input.textContent += opKey.innerHTML;
    })
})

clear.addEventListener('click', () => {
    input.textContent = '';
})
