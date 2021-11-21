const form = document.querySelector('#form')

const name = document.querySelector('#name')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')

const error = document.querySelector('#error')

function sendError(input, text) {
    input.style.border = '1px solid red'
    error.textContent = text
}

function clear() {
    const inputs = form.querySelectorAll('input')

    inputs.forEach((input) => {
        input.style.border = 'inherit'
    })
}

function checkName() {
    const regexp = /^[a-zA-Zа-яА-Я]+$/
    if (!regexp.test(name.value.trim())) {
        sendError(name, 'Имя может содержать только буквы')
    }
}

function checkPhone() {
    console.log(2)
    const regexp = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
    if (!regexp.test(phone.value)) {
        sendError(phone, 'Телефон должен иметь формат +7(000)000-0000')
    }
}

function checkEmail() {
    const regexp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
    console.log(email.value)
    if (!regexp.test(email.value.trim())) {
        sendError(email, 'Недействительный адрес эл-почты')
    }
}

function onSubmit(e) {
    clear()
    checkName() || e.preventDefault()
    checkPhone() || e.preventDefault()
    checkEmail() || e.preventDefault()
}

form.addEventListener('submit', onSubmit)