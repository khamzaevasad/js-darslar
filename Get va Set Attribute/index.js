// .getAttribute('') attribute qiymatini olib beradi
const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
link.textContent = 'Go to Youtube main page';

// SetAttribute('qasi attribute', 'qanday qiymatga o'zgarsin?' ) qiymatni o'zgartiradi
link.setAttribute('href', 'https://www.youtube.com');

// .getAttribute('class') class nomini ko'rish mumkin
const error = document.querySelector('p');

error.setAttribute('class', 'success');
console.log(error.getAttribute('class'));

// seetAttribute orqali style berish
error.setAttribute('style', 'color: red');
