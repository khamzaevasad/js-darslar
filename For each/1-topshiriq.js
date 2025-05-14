//savatda nechta maxsulot borligini xisoblaydigan dastur

let fruits = ['Olma', 'Banan', 'Olma', 'Uzum', 'Olma', 'Banan', 'Anor'];
let uniFruits = ['Olma', 'Banan', 'Uzum', 'Anor'];

uniFruits.forEach(function (a) {
  let counter = 0;

  fruits.forEach(function (b) {
    if (a === b) {
      counter++;
    }
  });
  console.log(`${a}-${counter}ta`);
});
