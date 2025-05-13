//  100ta  random sonni arreyning ichiga joylashtiruvchi loop funksiya tuzin

function addNumber() {
  const numberList = [];
  for (let i = 0; i < 100; i++) {
    const randomNumbers = Math.floor(Math.random() * 100) + 1;
    const AddRandomNumbers = numberList.push(randomNumbers);
    console.log(AddRandomNumbers);
  }
  console.log(numberList.sort());
}
addNumber();
