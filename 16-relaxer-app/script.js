const container = document.getElementById('container');
const text = document.getElementById('text');

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
}

breathAnimation();