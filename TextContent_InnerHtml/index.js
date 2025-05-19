// text content
// const title = document.querySelector('#title');
// title.textContent += 'NEW TEXT';

const listItem = document.querySelectorAll('.list-item');
listItem.forEach((item) => {
  item.textContent += ' Darslari';
});

// inner HTML (innerHTML taglarni ham qabul qiladi yani textni o'zini o'zgartirish bn cheklanmaydi)
const title = document.querySelector('#title');
title.innerHTML = '<i>HELLO WORLD</i>';

const people = ['Asadbek', 'Axror', 'Bekzod', 'Ayub'];
const peopleList = document.querySelector('.people-list');
people.forEach((item) => {
  peopleList.innerHTML += `<li><b>${item}</b></li>`;
});
