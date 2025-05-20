const ul = document.querySelector('ul');
// ul.remove() // /remove() elementni documentdan o'chirib yuboradi

function eventfunc() {
  const items = document.querySelectorAll('li'); // li taglarini chaqiramiz
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something New Text</li>'// yangi element qo'shish

    // JSda element yaratish
    const li = document.createElement('li');
    li.textContent = 'Something New Text';

    // ulga appendChild orqali eng pastki qismga element qo'shish
    ul.appendChild(li);
    // ulga prepend orqali yuqori eng birinchi qismga element qo'shish
    // ul.prepend(li)
  });

  // forEach methodi orqali har bir elementni ajratib olamiz
  items.forEach((item) => {
    //  Va xar bir element bosilganda qanday xodisa sodir bo'lishini kiritamiz
    item.addEventListener('click', (e) => {
      // e.target.style.textDecoration = 'line-through';
      // e.target.style.opacity = '0.5';
      // item.remove()
      // e.stopPropagation(); //stopPropagation() bu method boshqa elementlarga tasir o'tkazmasligini taminlaydi
      console.log('Clicked LI');
    });
  });
  ul.addEventListener('click', (e) => {
    // e.target.remove();
    if (e.target.nodeName == 'DIV') {
      e.target.remove();
    }
  });
}
eventfunc();
