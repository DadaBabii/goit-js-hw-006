const formlEl = document.querySelector('.login-form');
formlEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
    alert("Заповніть, будь-даска, усі поля!!!")
} else {    
        const formInfo = {
            email: `${email.value}`,
            password: `${password.value}`,
        }
        console.log(formInfo);
        evt.currentTarget.reset();
};
// console.log(formInfo);
}
