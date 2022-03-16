const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showErrorMessage(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccessMessage(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check if Email is Valid
function checkEmail(input) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(input.value.trim())) {
        showSuccessMessage(input);
    } else {
        showErrorMessage(input, 'Email is not valid');
    }
}

// Check Length of username and password
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showErrorMessage(input, 'There should be at least 3 characters.')
    } else if(input.value.length > max) {
        showErrorMessage(input, 'There should be no more than 15 characters.')
    } else {
        showSuccessMessage(input)
    }
}

// Check password
function checkPassword(password, password2) {
    if (password.value === password2.value) {
        showSuccessMessage(password2)
    } else {
        showErrorMessage(password2, 'Passwords are not the same.')
    }
}

// Check required fields
function checkRequiredFields(inputArray) {
    let isRequired = false;
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showErrorMessage(input, `${getFieldName(input)} is required.`);
            isRequired = true;
        } else {
            showSuccessMessage(input);
        }
    });
    return isRequired;
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequiredFields([username, email, password, password2])
    checkEmail(email)
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkPassword(password, password2)
});