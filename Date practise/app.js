// date-con
const date = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

// //time-con
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getTime() {
  const now = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // date-con timer
  const todayEl = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
  const monthEl = now.getMonth();
  const yaerEl = now.getFullYear();

  // time-con timer
  const hourEl = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  const minuteEl =
    now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  const secondEl =
    now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  date.textContent = `${todayEl}`;
  month.textContent = `${months[monthEl]},`;
  year.textContent = `${yaerEl}`;

  hour.textContent = `${hourEl}:`;
  minute.textContent = `${minuteEl}:`;
  second.textContent = `${secondEl}`;
}
setInterval(getTime, 1000);
