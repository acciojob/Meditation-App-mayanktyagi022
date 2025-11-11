//your JS code here. If required.
const app = document.getElementById('app');
const song = document.querySelector('.sound');
const video = document.querySelector('.video');
const play = document.querySelector('.play');
const timeDisplay = document.querySelector('.time-display');
const timeSelectButtons = document.querySelectorAll('#time-select button');
const soundButtons = document.querySelectorAll('.sound-picker button');

let fakeDuration = 600; // Default = 10 minutes

// Update timer display initially
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${String(fakeDuration % 60).padStart(2, '0')}`;

// Toggle play/pause
play.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    video.play();
    play.textContent = '❚ ❚';
  } else {
    song.pause();
    video.pause();
    play.textContent = '►';
  }
});

// Change time when user selects duration
timeSelectButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    fakeDuration = parseInt(this.getAttribute('data-time'));
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${String(fakeDuration % 60).padStart(2, '0')}`;
  });
});

// Switch between meditation modes
soundButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    song.src = this.getAttribute('data-sound');
    video.src = this.
