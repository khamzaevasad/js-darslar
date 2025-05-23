const movies = [
  { name: 'Avatar 3D', year: 2008, ratting: 9 },
  { name: 'Titanik 4D', year: 1997, ratting: 7 },
  { name: 'Forsaj 9 3D', year: 2020, ratting: 4 },
  { name: 'Avengers', year: 2012, ratting: 6 },
];

const sortedMovies = movies.sort((a, b) => {
  return a.ratting - b.ratting;
});
console.log(sortedMovies);

// alphabetical (alifbolar bo'yicha sort methodini ishlatish)
const names = ['asadbek', 'sardor', 'doniyor', 'bobur', 'jasur'];
const sortNames = names.sort();
console.log(sortNames);

//numbers
const numbers = [3, 1, 21, 15, 8, 9];
const sortNumbers = numbers.sort((a, b) => {
  return a - b;
});
console.log(sortNumbers);
