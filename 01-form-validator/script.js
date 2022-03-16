const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check if Email is Valid
function checkEmail(input) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check Length of username and password
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, 'There should be at least 3 characters.')
    } else if(input.value.length > max) {
        showError(input, 'There should be no more than 15 characters.')
    } else {
        showSuccess(input)
    }
}

// Check password
function checkPassword(password, password2) {
    if (password.value === password2.value) {
        showSuccess(password2)
    } else {
        showError(password2, 'Passwords are not the same.')
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value === '') {
            showError(input, 'Value cannot be empty.')
        } else {
            showSuccess(input)
        }
    });
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2])
    checkEmail(email)
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkPassword(password, password2)
});