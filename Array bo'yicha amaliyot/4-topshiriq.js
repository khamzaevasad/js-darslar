//[4, 20, 34, 45, 23, 2, 8, 65, 30, 56, 34, 80] ushbu arreyning ichidan 5 ga karrali sonlarni ajratib olib yangi arreyga joylang
// 5 ga karrali bo'lmaganlarini esa alohida arreyga joylang
// console ga quyidagini chiqaring (... ushbu sonlar 5 ga karrali, ... bu sonlar esa 5ga bo'linmaydi)

function func1() {
  const numbersList = [4, 20, 34, 45, 23, 2, 8, 65, 30, 56, 34, 80];
  const list1 = [];
  const list2 = [];
  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 5 === 0) {
      list1.push(numbersList[i]);
    } else {
      list2.push(numbersList[i]);
    }
  }
  console.log(
    `${list1} ushbu sonlar 5ga karrali\n${list2} bu sonlar 5ga bo'linmaydi`
  );
}
func1();
