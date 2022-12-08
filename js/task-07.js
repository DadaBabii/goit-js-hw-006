const controlEl = document.querySelector('#font-size-control');
console.dir(controlEl);
const textEl = document.querySelector('#text');
console.dir(textEl);

controlEl.addEventListener('change', changeFontSize);

function changeFontSize(evt) {
    const currentValue = evt.currentTarget.value;
    textEl.style.fontSize = `${currentValue}px`;


}