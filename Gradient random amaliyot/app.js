const body = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color-text');

const values = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

// random color function
function getGradient() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

//set color to body
function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.floor(Math.random() * 360);
  const bgcolor = `linear-gradient( ${randomDeg}deg, ${color1}, ${color2} )`;

  body.style.background = bgcolor;
  colorText.textContent = bgcolor;
}
setGradient();

container.addEventListener('click', setGradient);
