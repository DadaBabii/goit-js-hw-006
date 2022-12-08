

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
console.dir(bodyEl);

changeColorEl.addEventListener('click', onClick);

function onClick(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.innerHTML = `- ${bodyEl.style.backgroundColor}`;
}
