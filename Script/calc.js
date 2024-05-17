let buttons = document.getElementsByTagName('button');
let input = document.getElementsByTagName('input');

for (let button of buttons) {
    button.addEventListener('click',(event)=>{
        console.log(event.target.innerText);
    })
}
