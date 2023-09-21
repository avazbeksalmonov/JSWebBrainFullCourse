// Advanced objects
// flag medhods
// let user = {
//   name: "Webbrain",
//   title: "IT Center",
// };
// write
//delete
//loop
//value
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// userni ichidagi nameni statuslarini qanday turganini chiqarib beradi
// {
//     value: 'Webbrain',
//     writable: true,  - update qilish yokida qilmaslik uchun
//     enumerable: true, - loopda ko'rinish yokida ko'rinmaslik uchun
//     configurable: true - delete qilish yokida qilmaslik uchun
// }
// nameni update qilib bo'lmaydigan qilish uchun
Object.defineProperty(user, "name", { writable: false });
user.name = "wba"; // ma'lumot o'zgarmaydi
console.log(user.name);
// delete qilish uchun
Object.defineProperty(user, "name", { writable: false, configurable: false });
delete user.name; // o'chmaydi
console.log(user.name);
Object.defineProperty(user, "title", { writable: false, configurable: true });
delete user.title; // o'chadi bu holatda
console.log(user);
//Loop
let user = {
  name: "Webbrain",
  title: "IT Center",
  getData() {},
};
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "getData", {
  writable: false,
  enumerable: false,
  configurable: false,
});

for (let vl in user) {
  console.log(vl); // name,title,data
}
// getData loop bo'lganda chiqmaydi

///                    ** getter and setter **

const user = {
  name: "Webbrain",
  last: "Academy",
  get fullName() {
    console.log(this.name, this.last);
  },
  set fullName(value) {
    this.name = value.name;
    this.last = value.last;
  },
};
user.fullName = { name: "Eshmat", last: "Toshmat" };
user.fullName;

// way 2
const user2 = {
  name: "Webbrain",
  last: "Academy",
  get fullName() {
    console.log(this.name, this.last);
  },
  set fullName(value) {
    let newAr = value.split(" ");
    this.name = newAr[0];
    this.last = newAr[1];
  },
};
user2.fullName = "eshmat toshmat";
user2.fullName;
