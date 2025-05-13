// 1. Ikkita arrey bo'lsin ["Aleg", "Zokir", "Umid", "Javohir"]; va ["Abdulla", "Umid", "Doniyor", "Bobur", "Zohid"];
// Ikkala arreyni bir biriga qo'shing va ichidagi har bir ismga "bek" so'zini qo'shib chiqing
// Natijani alifbo tartibida joylang
function nameSort() {
  const names1 = ['Aleg', 'Zokir', 'Umid', 'Javohir'];
  const names2 = ['Abdulla', 'Umid', 'Doniyor', 'Bobur', 'Zohid'];
  const allNames = names1.concat(names2);
  const sortName = allNames.sort();
  for (let i = 0; i < sortName.length; i++) {
    console.log(sortName[i] + 'bek');
  }
}
nameSort();
