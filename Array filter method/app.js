const movies = [
  { name: 'Avatar 3D', year: 2008, ratting: 9 },
  { name: 'Titanik 4D', year: 1997, ratting: 7 },
  { name: 'Forsaj 9 3D', year: 2020, ratting: 4 },
  { name: 'Avengers', year: 2012, ratting: 6 },
];
// filter orqali 2010-yildan yuqoridagi kinolarni consolga chiqarish

const filterMovies = movies.filter((movie) => {
  return movie.name.includes('3D');
  //   return movie.year > 2010;
});

console.log(filterMovies);

// foreach orqali 2010-yildan yuqoridagi kinolarni consolga chiqarish
// const newMovies = [];
// movies.forEach((movie) => {
//   if (movie.year > 2010) {
//     newMovies.push(movie);
//   }
// });

// console.log(newMovies);
