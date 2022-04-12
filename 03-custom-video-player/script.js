const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);