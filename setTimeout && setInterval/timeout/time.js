const counter = document.querySelector('p');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const timeCon = document.querySelector('.time-con');

let a = 0;
let intervalId = null;

function timeInterval() {
  intervalId = setInterval(() => {
    a++;
    counter.textContent = a;
    if (counter.textContent > 10) {
      counter.style.color = 'green';
    }
  }, 1000);
}

function stopTime() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

startBtn.addEventListener('click', timeInterval);
pauseBtn.addEventListener('click', stopTime);
