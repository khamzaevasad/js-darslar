const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); // ma'lumotni js formatga o'tkazish
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("ma'lumotni olishni iloji yo'q!", undefined);
    }
  });

  request.open('GET', 'todos.json');
  request.send();
};

// async
getTodos((err, data) => {
  console.log('callback function ishga tushdi');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
