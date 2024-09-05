const numKeys = document.querySelectorAll('.numKey');
const funcKeys = document.querySelectorAll('.funcKey');
const opKeys = document.querySelectorAll('.opKey');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const clear = document.querySelector('#clear');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const keys = document.querySelectorAll('button');

add = (a,b) => {
    return (a + b);
}
subtract = (a,b) => {
    return (a - b);
}
multiply = (a,b) => {
    return (a * b);
}
divide = (a,b) => {
    if (b === 0) {
        output.textContent = 'Error';
    }
    return round(a / b);
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

const round = (num) => {
    const numStr = num.toString();
    const decInd = numStr.indexOf('.');

    if (decInd === -1 || numStr.length - decInd - 1 <= 5) {
        return num;
    }

    return parseFloat(num.toFixed(10));
}

equal.addEventListener('click', () => {
    const query = input.textContent;

    const xCode = '2715';
    const toUnicode = code => String.fromCodePoint(parseInt(xCode, 16));
    const x = toUnicode(xCode);

    const divCode = '00F7';

    const divToUnicode = divCode => String.fromCodePoint(parseInt(divCode, 16));
    const div = divToUnicode(divCode);


    if (query.includes('+')) {
        let num1 = Number(query.slice(0, query.indexOf('+')));
        let num2 = Number(query.slice(query.indexOf('+') + 1));
        output.textContent = add(num1, num2);
    } else if (query.includes('-')) {
        let num1 = Number(query.slice(0, query.indexOf('-')));
        let num2 = Number(query.slice(query.indexOf('-') + 1));
        output.textContent = subtract(num1, num2);
    } else if (query.includes(x)) {
        let num1 = Number(query.slice(0, query.indexOf(x)));
        let num2 = Number(query.slice(query.indexOf(x) + 1));
        output.textContent = multiply(num1, num2);
    } else if (query.includes(div)) {
        let num1 = Number(query.slice(0, query.indexOf(div)));
        let num2 = Number(query.slice(query.indexOf(div) + 1));
        output.textContent = divide(num1, num2);
    } 

})
