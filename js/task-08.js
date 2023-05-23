const form = document.querySelector(".login-form")

const validator = (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    if (email.value === '' || password.value.length === 0) {
        return alert("fill all the forms please");
}

console.log({
    email: email.value,
    password: password.value,
});
 event.target.reset(); 
};

form.addEventListener('submit', validator);

