const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("Malumotni olishni iloji yo'q!!");
  }
});

// open
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// sent
request.send();

// 1 open tayyor
// 2 send qilindi
// 3 Loading .... yuklanyabdi
// 4 ma'lumot keldi
