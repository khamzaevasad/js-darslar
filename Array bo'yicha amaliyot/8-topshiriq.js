// 5 ta talabani ro‘yxatda saqlang va Har biriga random ball (0 dan 100 gacha) bering.
// Ball 90 dan yuqori bo‘lsa "A", 80–89 bo‘lsa "B", 70–79 bo‘lsa "C", 60–69 bo‘lsa "D", 60 dan past bo‘lsa "F" chiqaring.
// Shartlar dastur funksiya ichida bo'lsin talabalar ro'yxatini array xolatida yozing agar notog'ri raqam kiritilsa dastur OMG ERROR
function gradeStudents() {
  const stundentList = ['Axror', 'Akmal', 'Sodiq', 'Sherzod', 'Nargiza'];
  const grade = [];
  for (let i = 0; i < stundentList.length; i++) {
    const randomNumbers = Math.floor(Math.random() * 100);
    grade.push(randomNumbers);
    if (grade[i] >= 90) {
      console.log(
        `Talaba: ${stundentList[i]}. Ball ${randomNumbers} Bahosi: A`
      );
    } else if (grade[i] >= 80 && grade[i] <= 89) {
      console.log(
        `Talaba: ${stundentList[i]}. Ball ${randomNumbers} Bahosi: B`
      );
    } else if (grade[i] >= 70 && grade[i] <= 79) {
      console.log(
        `Talaba: ${stundentList[i]}. Ball ${randomNumbers} Bahosi: C`
      );
    } else if (grade[i] >= 60 && grade[i] <= 69) {
      console.log(
        `Talaba: ${stundentList[i]}. Ball ${randomNumbers} Bahosi: D`
      );
    } else if (grade[i] < 60) {
      console.log(
        `Talaba: ${stundentList[i]}. Ball ${randomNumbers} Bahosi: F`
      );
    } else {
      console.log('OMG ERROR');
    }
  }
}
gradeStudents();
