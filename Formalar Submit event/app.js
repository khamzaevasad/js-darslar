const signupForm = document.querySelector('#signup-form');
const userName = document.querySelector('#username');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // saxifa yangilanishini to'xtadi
  console.log(userName.value);
});
