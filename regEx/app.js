const signupForm = document.querySelector('#signup-form');
// const userName = document.querySelector('#username');
const message = document.querySelector('.message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const regEX = /^[a-zA-Z]{6,12}$/; // talablar
  const inputVal = signupForm.username.value; // username ichidagi qiymatni olish

  if (regEX.test(inputVal)) {
    message.textContent = 'malumot togri';
  } else {
    message.textContent = 'malumot xato';
  }
});
