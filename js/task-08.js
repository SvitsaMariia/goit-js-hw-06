const form = document.querySelector(".login-form")
const input = document.querySelector("input")

const validator = (event) => {
    event.preventDefault();
    if (input.value === '') {
        alert("fill all the forms please")
    }
}

form.addEventListener('submit', validator)