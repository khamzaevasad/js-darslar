const body = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color-text');
const copyBtn = document.querySelector('.copy-btn');

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

function getColorGradient() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomColors = Math.floor(Math.random() * values.length);
    color += values[randomColors];
  }
  return color;
}

function setColorGradient() {
  const color1 = getColorGradient();
  const color2 = getColorGradient();
  const randomDeg = Math.floor(Math.random() * 360);
  const backgroundColor = `linear-gradient(${randomDeg}deg, ${color1},${color2})`;
  body.style.background = backgroundColor;
  colorText.textContent = backgroundColor;
}
setColorGradient();

container.addEventListener('click', setColorGradient);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(colorText.textContent);
  copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
});

setTimeout(() => {
  copyBtn.innerHTML = `<i class="fa-regular fa-clipboard"></i> Copy`;
}, 2000);
