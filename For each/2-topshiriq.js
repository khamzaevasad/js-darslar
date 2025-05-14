const city = ['Seoul', 'Busan', 'Seoul', 'Daegu', 'Seoul', 'Busan', 'Incheon'];
const uniCity = ['Seoul', 'Busan', 'Daegu', 'Incheon'];

uniCity.forEach(function (a) {
  let counter = 0;

  city.forEach(function (b) {
    if (a == b) {
      counter++;
    }
  });
  console.log(`${a}-${counter} ta`);
});
