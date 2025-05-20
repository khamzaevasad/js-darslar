const container = document.querySelector('section');
const toDoItems = document.querySelectorAll('.container-items');
const button = document.querySelector('button');

function buttonClick() {
  button.addEventListener('click', (e) => {
    // element yaratish
    const addDiv = document.createElement('div');
    //element uchun content text beramiz
    addDiv.textContent = "It's your new plan";
    //elementga style beramiz
    addDiv.className = 'container-items';
    //button bosilganda pastki qismdan ma'lumot chiqishi
    container.appendChild(addDiv);
  });
}
buttonClick();

function containerEvent() {
  container.addEventListener('click', (e) => {
    e.target.style.textDecoration = 'line-through';
    e.target.style.opacity = '0.5';
  });
}
containerEvent();
