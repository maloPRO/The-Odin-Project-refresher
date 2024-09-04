const numKeys = document.querySelectorAll('.numKey');
const funcKeys = document.querySelectorAll('.funcKey');
const opKeys = document.querySelectorAll('.opKey');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const clear = document.querySelector('#clear');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const keys = document.querySelectorAll('button');
const ops = ['+', '-', '/', '*']

add = (a,b) => {
    return (a + b);
}
subtract = (a,b) => {
    return (a - b);
}
multiply = (a,b) => {
    return a * b;
}
divide = (a,b) => {
    return a/b;
}

del.addEventListener('click', () => {
    input.textContent = input.textContent.slice(0, -1);
})

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
    output.textContent = '0';
});

equal.addEventListener('click', () => {
    const query = input.textContent;

    for(let op of ops) {
        if (op === '+') {
            let num1 = Number(query.slice(0, query.indexOf('+')));
            let num2 = Number(query.slice(query.indexOf('+') + 1));
            output.textContent = add(num1, num2);
        }
    }
})
