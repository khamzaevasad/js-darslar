const movies = [
  { name: 'Avatar 3D', year: 2008, ratting: 9 },
  { name: 'Titanik 4D', year: 1997, ratting: 7 },
  { name: 'Forsaj 9 3D', year: 2020, ratting: 4 },
  { name: 'Avengers', year: 2012, ratting: 6 },
];

const addRatting = movies.map((movie) => {
  return { name: movie.name, year: movie.year, ratting: movie.ratting + 1 };
});
console.log(addRatting);

// map orqali kvadratga oshirish
// const numbers = [2, 3, 4, 5];
// const mapNumbers = numbers.map((num) => {
//   return num ** 2;
// });

// console.log(mapNumbers);

//for each orqali kvadratga oshirish
// const res = [];
// numbers.forEach((num) => {
//   const sqrt = num ** 2;
//   res.push(sqrt);
// });
// console.log(res);
