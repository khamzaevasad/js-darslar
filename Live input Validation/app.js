const signupForm = document.querySelector('#signup-form');
// const userName = document.querySelector('#username');
const message = document.querySelector('.message');
const regEX = /^[a-zA-Z]{6,12}$/; // talablar

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputVal = signupForm.username.value; // username ichidagi qiymatni olish

  if (regEX.test(inputVal)) {
    message.textContent = 'malumot togri';
  } else {
    message.textContent = 'malumot xato';
  }
});

//live feedback
signupForm.username.addEventListener('keyup', (e) => {
  if (regEX.test(e.target.value)) {
    signupForm.username.setAttribute('class', 'success');
  } else {
    signupForm.username.setAttribute('class', 'error');
  }
});
