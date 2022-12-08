const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (evt) => {
    return evt.currentTarget.value
        ? outputEl.textContent = evt.currentTarget.value
        : outputEl.textContent = "Anonimus"
    // console.dir(evt.currentTarget.value);
})