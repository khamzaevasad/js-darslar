// setTimeOut

// setTimeout(function, time)

// function callMe() {
//   alert('Hello JS');
// }

// setTimeout(callMe, 3000);

let a = 0;
const timeInterval = setInterval(() => {
  a++;
  console.log(a);
}, 1000);

setTimeout(() => {
  clearInterval(timeInterval); // clearInterval() bu yuqroridagi timeIntervali tozalaydi
}, 10000);
