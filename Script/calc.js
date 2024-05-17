
let btnDivide = document.querySelector('[value="/"')
let btnMultiply = document.querySelector('[value="*"')
let btnMinus = document.querySelector('[value="-"')
let btnPlus = document.querySelector('[value="+"')
let btnSquare = document.querySelector('[value="**"')
let btnModulus = document.querySelector('[value="%"')
let btnAc = document.querySelector('[value="AC"')
let buttons = document.getElementsByTagName('button')

let input = document.querySelector('input')

let answer = document.querySelector('#equal')

for (let button of buttons) {
    button.addEventListener('click',(event)=>{
        input.value +=  event.target.value;
    })
}

btnAc.addEventListener('click', ()=>{
    input.value = "";
})

answer.addEventListener('click', ()=>{
    input.value = eval(`${input.value}`);
})