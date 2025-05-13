//["Ali", "Sardorbek", "Dilshod", "Anvarbek", "Jasur", "Ulug'bek"]; ushbu arreydan bek qo'shimchasi bor ismlarni aloxida arreyga
// // bek qo'shimchasi yuqlarni aloxida arreyga joylang va consolga chiqaring

function func1(names) {
  const bekNames = [];
  const notBekNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].includes('bek')) {
      bekNames.push(names[i]);
    } else {
      notBekNames.push(names[i]);
    }
  }
  console.log(
    `Bek qo'shimchasi bor ismlar -> ${bekNames.join(
      ' '
    )}\nBek qo'shimchasi yoq ismlar -> ${notBekNames.join(' ')}`
  );
}
func1(['Ali', 'Sardorbek', 'Dilshod', 'Anvarbek', 'Jasur', "Ulug'bek"]);
