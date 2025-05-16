/*------- 1 Mashq ------- */
// Ushbu Arraydagi stringni indexni toping
const myArray = [[false, true], [1, 2], 99, 'Good'];

//fordan foydanalilgan xolda
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === 'string') {
    // console.log(`index raqami ${i}`)
  }
}

// foreachdan foydalanilgan xolda
myArray.forEach(function (item, i) {
  if (typeof item === 'string') {
    // console.log(`index raqami ${i}`)
  }
});

/*------- 2 Mashq ------- */
// Array ichidagi faqat arraylarni elementlarini ajratib oling
//kutilyotgan natija [1,2,3,4,5,6]
const data = [[1, 2, 3], 'Red', [4, 5, 6], true, false];
const newDate = [];
data.forEach(function (item) {
  const res = Array.isArray(item);
  if (res) {
    item.forEach(function (num) {
      newDate.push(num);
    });
  }
});
// console.log(newDate);

/*------- 3 Mashq ------- */
//array ichdagi [null, 0, "", false, undefined, NaN] qiymatlarini ajratib oladigan kod yozing
const checkDate = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
const res = [];
checkDate.forEach(function (item) {
  if (!item) {
    res.push(item);
  }
});
// console.log(res);

/*------- 4 Mashq ------- */
// Berilgan qiymat 'Samarqand'
// Kutilyotgan qiymat: "dnaqramaS" =>  elemetlarni teskari qilib beradigan kod yozing
function reverse() {
  const city = 'Samarqand';
  const reverse = city.split('').reverse().join('');
  console.log(reverse);
}

/*------- 5 Mashq ------- */
// Promtdan kiritlgan istalgan so'zni misol uchun
// Kiritiladi: 'asSaLLom AlLaykuM yAxshiMisiZ?' so'zi kiritlgan bo'lsa. Uni
// aSSALOMU aLAYKUM yAXSHIMISIZ? ko'rinishda qayataring

const words = 'asSaLLom AlLaykuM yAxshiMisiZ?';
const splitWord = words.split(' ');
let newWord = '';

splitWord.forEach(function (item) {
  const wordLow = item.charAt().toLowerCase();
  const wordUp = item.slice(1).toUpperCase();
  const res = wordLow + wordUp;
  newWord += ' ' + wordLow + wordUp;
});
// console.log(newWord);
// const lowerWord = words.charAt().toLowerCase();
// const upperWord = words.slice(1);
// console.log(upperWord);
// console.log(lowerWord);

/*------- 6 Mashq ------- */
// Arary ichidagi natural sonlar yig'indisin toping

const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
let naturalNumbers = 0;
numbers.forEach((num) => {
  if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
    const res = (naturalNumbers += num);
  }
});
// console.log(naturalNumbers);

/*------- 7 Mashq ------- */
// Promtdan kiritgan stringlar ichida a harfi nechi marta ishtirok etganini aniqlang

const wordCal = 'Hello how are you? Good thanks!';
const splitcal = wordCal.split('');
let counter = 0;
splitcal.forEach(function (letter) {
  if (letter === 'a' || letter === 'A') {
    counter++;
  }
});
// console.log(counter);

/*------- 8 Mashq ------- */
//berilgan: [21.1,'Roziya', 'Array',['I am Array'], null, true, 214]
//array berilgan uni Type bo'yicha consolda chiqaring

const types = [21.1, 'Roziya', 'Array', ['I am Array'], null, true, 214];
let = newtypes = [];
types.forEach((item) => {
  newtypes.push(typeof item);
});
// console.log(newtypes);

/*------- 9 Mashq ------- */
//Kiritilgan text ichida nechta element borligini aniqlang Length()dan foydalanmang

const letter = 'UzbekistanKorea';
const letterSplit = letter.split('');
let counters = 0;
letterSplit.forEach((item) => {
  if (item) {
    counters++;
  }
});

// console.log(counters);

/*------- 10 Mashq ------- */
// arrayning berilgan: [1,2,3,4,5] uning ichidagi elementlariga o'z index (position)
// raqamlarini qo'shib yangi array xosil qiling
// natija: [1,3,5,7,9] bo'lsin

const arraynum = [1, 2, 3, 4, 5];
let resArray = [];

arraynum.forEach((num, i) => {
  const plus = num + i;
  resArray.push(plus);
});
// console.log(resArray);

/*------- 11 Mashq ------- */
// Random orqali Berilgan sonning tarkibidagi sonlar yig'indisini toping

const randomNumbers = Math.floor(Math.random() * 10) + 1;
let Resvalue = 0;
for (let i = 0; i < randomNumbers; i++) {
  Resvalue += i;
}
// console.log(`Random Number-> ${randomNumbers}! Result ${Resvalue}`);

/*------- 12 Mashq ------- */
// Berilgan sonni n ga ko'paytirib 1ni qo'shadigan kod yozing birinchi 10 ta xolatni qaytarsin

let number = 9;
for (let i = 1; i <= 10; i++) {
  let res = number * i + 1;
  // console.log(res);
}

/*------- 13 Mashq ------- */
// Functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylantirib bersin
newArr = [];
function reverseFunc(arr) {
  arr.forEach((num) => {
    newArr.push(num * -1);
  });
  console.log(newArr);
}
// reverseFunc([1, 2, 3, 4, 5]);

/*------- 14 Mashq ------- */
// fuctionga berilgan raqamni 0dan o'sha raqamlargacha bo'lgan sonlarni 3, 5 va 15 ga bo'linish xolatlarini tekshiring
// 3ga bo'linadigan sonlar fizz
// 5ga bo'linadigan sonlar buzz
// 5ga va 3ga bo'linadigan sonlar fizzbuzz deeb ataladi

const ranNumbers = Math.floor(Math.random() * 100) + 1;
function fizzFunc(randomNumbers) {
  if (ranNumbers % 3 === 0) {
    // console.log(`${ranNumbers} 3ga bo'linadi ${ranNumbers} fizz`);
  } else if (ranNumbers % 5 === 0) {
    // console.log(`${ranNumbers} 5ga bo'linadi ${ranNumbers} buzz`);
  } else if (ranNumbers % 5 === 0 && ranNumbers % 3 === 0) {
    // console.log(`${ranNumbers} 5 va 3ga bo'linadi ${ranNumbers} fizzbuzz`);
  } else {
    // console.log(ranNumbers, 'Error');
  }
}
fizzFunc(ranNumbers);

/*------- 15 Mashq ------- */
// O'zingiz haqingizda object yarating va unga haqida methodni qo'shing
// u methondan foydalansa objectdagi ma'lumotlardan foydalanib o'zingiz haqingizda gapirib bersin

const asadObj = {
  name: 'Asadbek',
  lastName: 'Khamzaev',
  age: 25,
  location: 'South Korea',
  isMerried: false,
  job: 'Web developer',
  about: function () {
    return `Hello my name is ${this.name}! My Lastname is ${this.lastName},
    My job ${this.job} in ${this.location}
    I'm ${this.age} years old
    ${this.isMerried ? 'Uylangan' : 'Uylanmagan'}`;
  },
};
console.log(asadObj.about());
