//2. Switch case orqali oylarning raqami kiritilganda uning nechanchi oy ekanligini ko'rsatuvchi funksiya yasang
function monthCheck() {
  const monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (let i = 0; i < monthNumber.length; i++) {
    switch (monthNumber[i]) {
      case monthNumber[0]:
        console.log(`${monthNumber[0]}-oy Yanvar`);
        break;
      case monthNumber[1]:
        console.log(`${monthNumber[1]}-oy Fevral`);
        break;
      case monthNumber[2]:
        console.log(`${monthNumber[2]}-oy Mart`);
        break;
      case monthNumber[3]:
        console.log(`${monthNumber[3]}-oy Aprel`);
        break;
      case monthNumber[4]:
        console.log(`${monthNumber[4]}-oy May`);
        break;
      case monthNumber[5]:
        console.log(`${monthNumber[5]}-oy Iyun`);
        break;
      case monthNumber[6]:
        console.log(`${monthNumber[6]}-oy Iyul`);
        break;
      case monthNumber[7]:
        console.log(`${monthNumber[7]}-oy Avgust`);
        break;
      case monthNumber[8]:
        console.log(`${monthNumber[8]}-oy Sentabr`);
        break;
      case monthNumber[9]:
        console.log(`${monthNumber[9]}-oy Oktabr`);
        break;
      case monthNumber[10]:
        console.log(`${monthNumber[10]}-oy Noyabr`);
        break;
      case monthNumber[11]:
        console.log(`${monthNumber[11]}-oy Dekabr`);
        break;
      default:
        console.log("Noto'gri Malumot kiritilgan");
        break;
    }
  }
}
monthCheck();
