function eventfunc() {
  const items = document.querySelectorAll('li'); // li taglarini chaqiramiz
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    alert('You clicked "Click Me" Button! ');
  });

  // forEach methodi orqali har bir elementni ajratib olamiz
  items.forEach((item) => {
    //  Va xar bir element bosilganda qanday xodisa sodir bo'lishini kiritamiz
    item.addEventListener('click', (e) => {
      e.target.style.textDecoration = 'line-through';
      e.target.style.opacity = '0.5';
    });
  });
}
eventfunc();
