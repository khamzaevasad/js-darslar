const getTodos = (resurse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); // ma'lumotni js formatga o'tkazish
        resolve(data);
      } else if (request.readyState === 4) {
        reject("ma'lumotni olishni iloji yo'q!");
      }
    });

    request.open('GET', resurse);
    request.send();
  });
};
getTodos('./bekzod.json')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async
// getTodos((err, data) => {
//   console.log('callback function ishga tushdi');
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// promise
// const internet = true;
// const getData = () => {
//   return new Promise((resolve, reject) => {
//     // serverga so'rov jo'natamiz
//     if (internet) {
//       resolve('some data');
//     } else {
//       reject('some error');
//     }
//   });
// };

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
