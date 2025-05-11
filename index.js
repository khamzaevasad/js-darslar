//Foydalanuvchi oydan raqam kiritadi (1 dan 12 gacha). Dastur oy nomini chiqarib bersin.
function monthsCheck(randomNumber) {
  switch (randomNumber) {
    case 1:
      console.log(`${randomNumber}-oy Yanvar oyi`);
      break;
    case 2:
      console.log(`${randomNumber}-oy Fevral oyi`);
      break;
    case 3:
      console.log(`${randomNumber}-oy Mart oyi`);
      break;
    case 4:
      console.log(`${randomNumber}-oy Aprel oyi`);
      break;
    case 5:
      console.log(`${randomNumber}-oy May oyi`);
      break;
    case 6:
      console.log(`${randomNumber}-oy Iyun oyi`);
      break;
    case 7:
      console.log(`${randomNumber}-oy Iyul oyi`);
      break;
    case 8:
      console.log(`${randomNumber}-oy Avgust oyi`);
      break;
    case 9:
      console.log(`${randomNumber}-oy Sentabr oyi`);
      break;
    case 10:
      console.log(`${randomNumber}-oy Oktabr oyi`);
      break;
    case 11:
      console.log(`${randomNumber}-oy Noyabr oyi`);
      break;
    case 12:
      console.log(`${randomNumber}-oy Dekabr oyi`);
      break;

    default:
      console.log(`${randomNumber}-mavjud bo'lmagan oy`);
      break;
  }
}
monthsCheck(Math.floor(Math.random() * 12) + 1);
