let text = 'hello world';
let newText = Array.from(text);
let newUp = [];

newText.forEach(function (a) {
  const UpText = a.charAt().toUpperCase();
  newUp.push(UpText);
});
console.log(newUp.join(' '));
