/********************************* */
var r = document.querySelector(':root');
var rs = getComputedStyle(r);
var interval = rs.getPropertyValue('--interval');

var interval = document.getElementById('interval');
var spinner = document.getElementById('spin');
var reset = document.getElementById('resetButton');

var playAudio = true;
function interval_set() {
  r.style.setProperty('--interval', interval.value + 's');
  spinner.classList.add('spinAnim');
  playSound();
}
var audioOptions = document.getElementById('audioOptions');
var minutes = document.getElementById('minutes');
var audioButton = document.getElementById('audioButton');
var duration = document.getElementById('duration');
var audio = new Audio('https://www.soundjay.com/misc/small-bell-ring-01a.mp3');

function playSound() {
  var intervalId = setInterval(function () {
    audio.load();
    audio.play();
    var t = duration.value / interval.value;
    seconds.innerHTML = t;
    seconds.innerHTML = --duration.value;
  }, interval.value * 1000);
  setTimeout(function () {
    clearInterval(playSound);
    document.getElementById('spin').classList.remove('spinAnim');
    document.getElementById('interval').value = 0;
    document.getElementById('duration').value = 0;
    audio.currentTime = 0;
    clearInterval(intervalId);
  }, duration.value * interval.value * 1000);
}

resetButton.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('spin').classList.remove('spinAnim');
  document.getElementById('interval').value = 0;
  document.getElementById('duration').value = 0;
  stop(0);
  audio.currentTime = 0;
  clearInterval(intervalId);
});

audioOptions.addEventListener('change', function (e) {
  e.preventDefault();
  document.getElementById('audioButton').classList.remove('disabled');
  audio.stop();
});
