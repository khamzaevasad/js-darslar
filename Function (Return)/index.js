//funksiya ichidagi return operatori tashqariga qiymat qaytaradi va u qiymatni funksiya tashqarisida qayta ishlatish mumkin
// unga misol tariqasida pastdaki dasturni ko'rishingiz mumkin

// 1-dan 10gacha bo'lgan random raqamlarni kvadrati va kubini topuvchi dastur!

const squareVsCube = function (randomNumbers) {
  const square = randomNumbers ** 2;
  const cube = randomNumbers ** 3;
  return `Kiritilgan son -> ${randomNumbers}\n ${randomNumbers}ning kvadrati -> ${square}, ${randomNumbers}ning kubi -> ${cube}`;
};
const result = squareVsCube(Math.floor(Math.random() * 10) + 1);
console.log(result);
