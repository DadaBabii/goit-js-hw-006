function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//  Зробила, але спрацьовує тільки 1 раз, 
// а потім треба рестартити сторінку, так і не змогла розібрати чому

const inputNumber = document.querySelector('#controls');
const destroyBtn = document.querySelector('button[data-destroy]');
const createBtn = document.querySelector('button[data-create]');
const boxesEl = document.querySelector('#boxes');



let boxSizeW = 30;
let boxSizeH = 30;
let divBoxArrey = '';
let amount = 0;


inputNumber.addEventListener('change', getNunber);
destroyBtn.addEventListener('click', destroyBox);
createBtn.addEventListener('click', makeBox); 


function getNunber(evt) {

  amount = evt.currentTarget.firstElementChild.value;
  
}


 
function makeBox(evt) {

  for (let i = 0; i < amount; i += 1) {
    divBoxArrey += `<div id="boxes" style ="display: block; width: ${boxSizeW += 10}px; height: ${boxSizeH += 10}px; background-color: ${getRandomHexColor()}; margin: 10px"> </div>`;
  }
  boxesEl.innerHTML = divBoxArrey;
}

function destroyBox(evt) {
  boxesEl.innerHTML = "";
  console.dir(boxesEl);
  
}
