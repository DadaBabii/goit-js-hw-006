let counterValue = 0;

let valueEl = document.querySelector("#value");

const plusOne = document.querySelector('button[data-action="increment"]');
const minusOne = document.querySelector('button[data-action="decrement"]');

plusOne.addEventListener("click", () => {valueEl.textContent = counterValue += 1});
minusOne.addEventListener("click", () => {valueEl.textContent = counterValue -= 1});