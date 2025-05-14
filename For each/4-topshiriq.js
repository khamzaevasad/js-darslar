let numbers = [1, 2, 3, 4, 5];

function numCalc(numbersList) {
  numbers.forEach(function (squarte) {
    const kvNumbers = squarte * squarte;
    console.log(`${squarte} ning kvadrati ${kvNumbers}`);
  });
}
numCalc(numbers);
