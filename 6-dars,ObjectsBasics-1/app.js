// function getRectArea(width, height) {
//     if (width > 0 && height > 0) {
//         return width * height;
//     }
//     return 0;
// }
// console.log(getRectArea(-3, 4));

// ===== Objects Basics-1 =====
// {
//   key: value;
// }
// let newObj = {};
// let newObj2 = new Object();
// console.log(newObj, newObj2);

// let account = {
//   title: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
//   "full name": "webbrain IT academy",
//   0: 23456,
// };
// console.log(account);
// console.log(account.title); // Webbrain academy
// console.log(account.surname); // undifined
// console.log(account["founded"]); // founded
// // console.log(account."full name"); error
// console.log(account["full name"]);
// console.log(account[0]); // 23456
// console.log(account["0"]); // 23456
// . bn [] bir xil deyarli

// let key = "major";
// console.log(account.key); // undefined
// console.log(account[key]); // Frontend,bunker
// console.log(account["key"]); // undefined

// let name = "major";
// console.log(account.title); // Webbrain Academy
// console.log(account[name]); //Frontend,bunker
// console.log(account["name"]); // undefined

// const account = {
//   name: "Webbrain Academy",
//   major: "Frontend",
//   name: "IT", // "IT"ni oxirgisini oladi
// };
// //Object.freeze(account); // Objectni qotirib qo'yadi,o'zgartirib bo'lmaydi
// // account.name = "Webbrain IT Academy";
// account.founded = 2020; // founded qo'shiladi objectga
// console.log(account);
// // natija   === { name: "IT", major: "Frontend", founded: 2022 }
// Object.seal(account); // malumot qo'shib ham bo'lmaydi,o'chirib ham bo'lmaydi,faqat ma'lumotni o'zgartirish mumkin

// delete account.major;
// major o'chib ketadi

// const acc1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// const acc2 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// acc1.founded = 2022;
// console.log(acc1 === acc2); //false
// const acc3 = acc1;
// console.log(acc1 == acc3); // true
// console.log(acc1 === acc3); // true
// console.log(acc1); // bir xil bo'ladi acc3 bn
// console.log(acc3); //bir xil bo'ladi acc1 bn
// const acc1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// const acc2 = structuredClone(acc1); // acc1ni acc2ga clone qilib beradi
// acc1.major = "Backend"; // acc2 o'zgarmaydi
// console.log(acc2);

// let name = "Webbrain Academy";
// let major = "Frontend";
// const acc1 = {
//   name, //name: name,
//   major, //major: major,
// };
// console.log(acc1);
// let name = "Webbrain IT Academy";
// const acc1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// console.log("name" in acc1); // true // nameni acc1ni ichida bor yoki yo'qligini tekshiirib beradi
// // bor bo'lsa true,yo'q bo'lsa false
// console.log("names" in acc1); // false
// console.log(name in acc1); //false
// let name = "Webbrain IT Academy";
// let major = "Frontend";
// const acc1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// acc1.name = "Test"; // acc2 ham o'zgaradi
// const acc2 = {};
// Object.assign(acc2, acc1);
// console.log(acc2);

// let name = "Webbrain IT Academy";
// let major = "Frontend";
const acc1 = {
  name: "Webbrain Academy",
  major: "Frontend",
  founded: 2022,
  students: 1000,
  mentors: 5,
};

for (let i in acc1) {
  console.log(i);
}
