// Declare variables
const pwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');
const lenEl = document.querySelector('#len');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symbolEl = document.querySelector('#symbol');
const generateEl = document.querySelector('#generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}|:><?=+][_-"

function upperLettersFunc() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function lowerLettersFunc() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function numbersFunc() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function symbolsFunc() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    let lengthVal = lenEl.value;
    let password = '';

    if (upperEl.checked) {
        password += upperLettersFunc();
    }

    if (lowerEl.checked) {
        password +=  lowerLettersFunc();
    }

    if (numberEl.checked) {
        password +=  numbersFunc();
    }

    if (symbolEl.checked) {
        password +=  symbolsFunc();
    }

    for (let index = password.length; index < lengthVal; index++) {
            const passwordGenerator =  generatePass();
            password += passwordGenerator;
    }
    return pwEl.innerText = password;
}

function generatePass() {
    let passwordArray = [];
    if (upperEl.checked) {
        passwordArray.push(upperLettersFunc());
    }

    if (lowerEl.checked) {
        passwordArray.push(lowerLettersFunc());
    }

    if (numberEl.checked) {
        passwordArray.push(numbersFunc());
    }

    if (symbolEl.checked) {
        passwordArray.push(symbolsFunc());
    }

    if (passwordArray.length == 0) return "";
    return passwordArray[Math.floor(Math.random() * passwordArray.length)];
}

generateEl.addEventListener('click', generatePassword);


// copy to clipboard
copyEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if (!password) return;
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})


