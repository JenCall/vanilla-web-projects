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
        showErrorMessage(
            input, 
            `${getFieldName(input)} should be at least ${min} characters.`
        );
    } else if(input.value.length > max) {
        showErrorMessage(
            input, 
            `${getFieldName(input)} should be less than ${max} characters.`
        );
    } else {
        showSuccessMessage(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showErrorMessage(input2, 'Passwords are not the same.');
    }
}

function getFieldName(input) {
    return (input.id.charAt(0).toUpperCase() + input.id.slice(1));
}

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
    checkPasswordsMatch(password, password2)
});