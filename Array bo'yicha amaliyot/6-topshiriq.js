// Bizda quyidagicha list mavjud ['MuhammadQodir', 'Asadbek', 'Umarbek', 'Otabek', 'Muhammadsodiq', 'Asliddin', 'Mirzohid', 'Abdulloh']
// list ichidagi har bir o'quvchiga 5 xonali student number bering. Misol uchun: MuhammadQodir 19340 vahk
// shartlari 5xonali raqamlar random orqali aniqlansin va dastur funksiya ichida yozilsin + for yoki whiledan foydalanilsin
// consolda quyidagicha chiqsin Talaba ismi: MuhammadQodir. Talabalik raqami: 12999. Random orqali tanlangan ID: 12999

function idGenerate() {
  const studentsList = [
    'MuhammadQodir',
    'Asadbek',
    'Umarbek',
    'Otabek',
    'Muhammadsodiq',
    'Asliddin',
    'Mirzohid',
    'Abdulloh',
  ];
  const studentsListId = [];
  for (let i = 0; i < studentsList.length; i++) {
    const randomNumbers = Math.floor(Math.random() * 90000) + 10000;
    studentsListId.push(randomNumbers);
    console.log(
      `Talaba ismi: ${studentsList[i]}. Talabalik raqami: ${randomNumbers}. Random orqali tanlangan ID: ${studentsListId[i]}   `
    );
  }
}
idGenerate();
