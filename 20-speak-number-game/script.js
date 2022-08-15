const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();

console.log('Number:', randomNum)

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}