// local stroge

// setItem
const names = ['asadbek', 'axror', 'bekzod'];
// localStorage.setItem('names', JSON.stringify(names));

//getItem
const getNames = JSON.parse(localStorage.getItem('names'));
// console.log(getNames);

// const getAge = localStorage.getItem('age');
// console.log(getAge);
// clear

const fNames = JSON.parse(localStorage.getItem('names'))
  ? console.log(JSON.parse(localStorage.getItem('names')))
  : [];

// if (fNames.length > 0) {
//   fNames.forEach((fName) => {
//     console.log(fName);
//   });
// } else {
//   console.log("hechqanday ism yo'q");
// }
