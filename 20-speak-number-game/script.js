const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}