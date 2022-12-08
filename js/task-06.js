const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
    
    if (Number(evt.currentTarget.value.length) !== Number(evt.currentTarget.dataset.length)) {
    console.dir(evt.currentTarget.value.length)
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    } else if (Number(evt.currentTarget.value.length) === Number(evt.currentTarget.dataset.length))
    {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
}