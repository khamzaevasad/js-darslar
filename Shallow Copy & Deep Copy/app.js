// shallow copy - sayoz nusxalash
// deep copy - chuqur nusxalash

/* -- primitive -- */
let a = 2;
let b = a;
b = 7;
// console.log('b:', a);
// console.log('b:', b);

/* -- refrence -- */ // turdagi ma'lumotlarni bir o'zgaruvchiga tenglab tenglangan o'zgaruvchi malumotlarini o'zgartirganda yuqoridagi mavjud ma'lumot xam o'zgaradi

const person = {
  name: 'Asadbek',
  age: 25,
};

const newPerson = person;

newPerson.name = 'Axror';
newPerson.age = 22;

// console.log('person:', person);
// console.log('newPerson:', newPerson);

const student = {
  name: 'Asadbek',
  uni: 'Knu',
  studentNum: 202213136,
};

const newStudent = { ...student }; // ... nuqtalar tenglingni o'ng tarida kelsa spret operatori bo'ladi

newStudent.name = 'Zarina';
newStudent.uni = 'Bufs';
newStudent.studentNum = 202413136;
console.log(student);
console.log(newStudent);
