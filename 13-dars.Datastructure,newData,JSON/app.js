//Datastructure , new Data(), JSON
// let students = [
//     { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//     { id: 2, year: 2000, name: "Asilbek Tolipov" },
//     { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//     { id: 4, year: 2002, name: "Mominov Abdulloh" },
//     { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//     { id: 6, year: 2002, name: "Hudoyberdiyeva Mohichehra" },
//     { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//     { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let res = students.reduce((value, current) => {
//     // console.log(value, current);
//     return 1;
// }, students);
// console.log(res); //reuce nimaga return qilsa,shu qiymatni qabul qiladi

//===Destructure=====

//==Obyektlarda==
let obj = { name: "webbrain", title: "IT Center", data: { year: 1998 } };
let name = "webbrain";
let {
    name: newName,
    title,
    data: { year },
} = obj;
console.log(name, title, year);

//===Arraylarda===
let ar = ["apple", "orange", "Kiwi"];

// let [bir, ikki, uch] = ar;
let [bir, ...res] = ar; // birdan keyingi hamma ma'lumotni array qilib qaytarib beradi
console.log(res);

//==Function parametrida==

// const getData = ({ name, id }) => {
//     console.log(name, id);
// };
// // getData({ name: "web", id: 1 });
// getData();

// const getData = (data = {}) => {
//     console.log(data ? .name, id);
// };
// getData();
let obj = { name: "webbrain", title: "IT Center", data: { year: 1998 } };

Object.entries(obj).map(([value], index) => {
    console.log(value); // name,title,data
});
Object.entries(obj).map(([key, value]) => {
    console.log(key, value); // name webbrain
    // title IT Center
    // data { year: 1998 }
});

/// ===new Date()===
console.log(Date.now());
let date = new Date();
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

const getToday = (symbol) => {
    let date = new Date();
    return `Todays: ${date.getDate()}${symbol}${
    date.getMonth() + 1
  }${symbol}${date.getFullYear()}`;
};
console.log(getToday("/")); //Todays: 8/9/2023
console.log(getToday("-")); //Todays: 8/9/2023

let date = new Date();
let soat = date.getHours(),
    minut = date.getMinutes(),
    second = date.getSeconds();
let res = `Hozirgi vaqt ${soat}-${minut}-${second}`;
console.log(res);
let weeks = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
];
let date = new Date();
console.log(weeks[date.getDay()]);
console.log(weeks[date.getDay()].slice(0, 2));
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// ===JSON ==== JavaScript Object Notation

let user = {
    name: "webbrain",
    year: 2023,
    age: 25,
    data: { fullName: "webbrain academy", founded: 2019 },
};

console.log(JSON.stringify(user, [])); // objectni JSONga o'zgartirish,
// string formatda qaytaradi {"name":"webbrain","year":2023}
console.log(
    JSON.stringify(user, ["name", "year", "data", "fullname", "founded"], 4) // 4tab joy tashlab beradi
); // backendga name va year ketsin,age qolsin

let json = JSON.stringify(user);

let obj = JSON.parse(json); // JSONni Objectga o'tqizib beradi
console.log(obj);