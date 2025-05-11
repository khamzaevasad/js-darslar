//1 dan 10 gacha bo‘lgan sonlarning kvadratlari va kublarini chiqaradigan dastur yozing. 1dan 10gacha bo'lgan sonlar array xolatida yozing

// //for dan foydalangan xolatda
// function squareVsCube() {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1-dan 10gacha bo'lganlar sonlar (Array)
//   for (let i = 0; i < numbers.length; i++) {
//     const square = numbers[i] ** 2;
//     const cube = numbers[i] ** 3;
//     console.log(`${numbers[i]}ning kvadrati ${square}, kubi ${cube}`);
//   }
// }
// squareVsCube();

//Whiledan foydalangan xolatda
// function squareVsCube() {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1-dan 10gacha bo'lganlar sonlar (Array)
//   let i = 0;
//   while (i < numbers.length) {
//     const square = numbers[i] ** 2;
//     const cube = numbers[i] ** 3;
//     console.log(`${numbers[i]}ning kvadrati ${square}, kubi ${cube}`);
//     i++;
//   }
// }
// squareVsCube();

//Do whiledan foydalangan xolatda

function squareVsCube() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1-dan 10gacha bo'lganlar sonlar (Array)
  let i = 0;
  do {
    const square = numbers[i] ** 2;
    const cube = numbers[i] ** 3;
    console.log(`${numbers[i]}ning kvadrati ${square}, kubi ${cube}`);
    i++;
  } while (i < numbers.length);
}
squareVsCube();

// do whilexolatida birinchi bajaradi undan keyin shartni tekshiradi lekin shu orada dastur 1marta ishlab oladi Whileda esa
//1-shartni tekshiradi va undan so'ng dastur ishga tushadi
