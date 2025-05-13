//5 ta futbol jamoasi ro‘yxatini yarating va Har bir jamoaga random ball (0 dan 10 gacha) bering.
//consolda har bir jamoaning ballini chiqarib bering. misol uchun Jamoa: Kokand1912. Urilgan gollar: 6
// shartlari arraydan foydalaning for operatorini ishlating

function soccer(params) {
  const commmandName = [
    'Barcelona',
    'RealMadrid',
    'Manchester City',
    'Kokand1912',
    'Liverpool',
  ];
  const gool = [];
  for (let i = 0; i < commmandName.length; i++) {
    const randomNumbers = Math.floor(Math.random() * 10);
    gool.push(randomNumbers);
    console.log(`Jamoa: ${commmandName[i]}. Urilgan gollar: ${randomNumbers}`);
  }
}
soccer();
