//arrow functionga misol

//Savatchadagi mahsulotlarning umumiy og‘irligini hisoblovchi dastur yozing.
// Massivda mahsulotlar og‘irligi beriladi, masalan: [2, 3, 1.5, 4] (kilogrammda).
// Har bir mahsulot qadoq og‘irligi bor deb hisoblansin (masalan, 0.2 kg).
// Dastur umumiy og‘irlikni hisoblasin: mahsulot og‘irligi + qadoq og‘irligi.
// Umumiy og‘irlikni qaytarsin.

// Arrow functiondan foydalanilgan xolati
const totalWeightCalc = (productWeight, packageWeight) => {
  let totalWeight = 0;
  for (let i = 0; i < productWeight.length; i++) {
    totalWeight += productWeight[i] + packageWeight;
  }
  return `Mahsulotlar ${productWeight}, Qadoq ${packageWeight}\n Natija: ${totalWeight}kg`;
};
const result = totalWeightCalc([2, 3, 1, 5, 4], 0.2);
console.log(result);

// const totalWeightCalc = function (productWeight, packageWeight) {
//   totalWeight = 0;
//   for (let i = 0; i < productWeight.length; i++) {
//     totalWeight += productWeight[i] + packageWeight;
//   }
//   return `Mahsulotlar ${productWeight}, Qadoq ${packageWeight}\n Natija: ${totalWeight}kg`;
// };
// const result = totalWeightCalc([2, 3, 1, 5, 4], 0.2);
// console.log(result);

//Chegirmani aniqlavchi dastur

// const discountCalc = (price, discount) => {
//   let totalPrice = 0;
//   for (let i = 0; i < price.length; i++) {
//     let currentPrice = price[i];
//     let discountAmount = currentPrice * discount;
//     let finalPrice = currentPrice - discountAmount;
//     totalPrice += finalPrice;
//   }
//   return totalPrice;
// };
// const result = discountCalc([10000, 25000, 15000], 0.05);
// console.log(result);
