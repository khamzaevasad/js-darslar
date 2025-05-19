// const content = document.querySelector('p');
// console.log(content.classList); .classList -> elementni classlar ro'yxatini ko'rishi uchun ishlatiladi
// content.setAttribute('class', 'error');
// content.classList.add('success');
// content.classList.remove('success');

const paragraph = document.querySelectorAll('p');
paragraph.forEach((items) => {
  if (items.textContent.includes('success')) {
    items.classList.add('success');
  } else if (items.textContent.includes('error')) {
    items.classList.add('error');
  } else if (items.textContent.includes('remove')) {
    items.classList.remove('remove');
  }
});

// toggle

const heading = document.querySelector('h1');
heading.classList.toggle('success'); // toggleni asosiy vazifasi agar siz so'ragan class elementda yo'q bo'lsa qo'shadi
heading.classList.toggle('success'); // aksincha siz so'ragan class elementda mavjud bo'lsa u classni olib tashlaydi
