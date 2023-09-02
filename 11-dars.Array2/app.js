//Array 2
// console.log(eval([1, 2, 3].join("+")));
// let num = [1, 2, 34, 3, 22, 45, 0];
// let num = [1, 2, 3, 4, 5];
// let n = [2, 3, 1, 7, 8, 9, 6];
let str = ["orange", "Apple", "banana", "kiwi"];

let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Tolipov" },
    { id: 3, year: 2002, name: "Najmiddin Nazarov" },
    { id: 4, year: 2002, name: "Mominov Abdulloh" },
    { id: 5, year: 1995, name: "Sardor Tursunboyev" },
    { id: 6, year: 2002, name: "Hudoyberdiyeva Mohichehra" },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shukurov Shohruh" },
];
let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
let n = [2, 3, 1, 1, 7, 8, 9, 6];
// let obj1 = new Map([
//     ["a", 1],
//     ["b", 2],
// ]).entries();
// let obj2 = new Map([
//     ["a", 1],
//     ["b", 2],
// ]).entries();
// console.log(obj1.next());
// console.log(obj2.next());
// console.log(obj1.next());

// function* test() {}
// let t = new test();
// t.next();
// console.log(obj.next().done); //false
// console.log(Array.from([1, 2, 3]));
// console.log(Array.from("Webbrain")); // har birini alohida olib beradi[
//     'W', 'e', 'b',
//     'b', 'r', 'a',
//     'i', 'n'
//   ]
// console.log(Array.from("webbrain", (value) => value.toUpperCase()));
//==new Set() and newMap()==
// console.log(
//     new Map([
//         ["a", 1],
//         ["b", 2],
//     ]).keys() // .values()da valuesini qaytradi
// );
// let obj = { name: "webbrain", status: "IT Center" };
// console.log(Object.entries(obj));
// let res = n.filter((value, index, array) => {
//     return array.indexOf(value) === index;
// });
// console.log(res);
//=== flat()==
// let num = [1, [2, [3, 4]], 5, 6, 7, 8]; // array ichida array
// console.log(num[3]); //6
// console.log(num[1][1][0]); // 3
// console.log(num.flat(1)); //eng katta parentidan chiqarib beradi[ 1, 2, [ 3, 4 ], 5, 6, 7, 8 ]
// console.log(num.flat(2)); //eng katta 2-parentidan chiqarib beradi[ 1, 2,  3, 4 , 5, 6, 7, 8 ]
// console.log(num.flat(Infinity)); // cheksiz ichma-ich bo'lsa chiqarib beradi
// console.log(num.flat(Infinity).reduce((s, c) => s + c, 0)); // 36
//=== reduce()===
// reduce(callback,initialvalue)
// let res = num.reduce((sum, current, i) => {
//     console.log(sum, i, current - i);
//     return current - i;
// }, 0);
// console.log(res);
// 0 0 1
// 1 1 1
// 1 2 1
// 1 3 1
// 1 4 1
// 1
// let res = num.reduce((sum, current, i) => {
//     console.log(sum, i, i - sum);
//     return i - sum;
// }, 0);
// console.log(res);
// 0 0 0
// 0 1 1
// 1 2 1
// 1 3 2
// 2 4 2
// 2
//===
// let res = num.reduce((sum, current, i) => {
//     console.log(sum, i, sum - i);
//     return sum - i;
// }, 0);
// console.log(res);
// 0 0 0
// 0 1 -1
// -1 2 -3
// -3 3 -6
// -6 4 -10
// -10

// let res = num.reduce((sum, current) => {
//     // console.log(sum);
//     return (sum += current); //107
// }, 0);
// console.log(res);
// let res = num.reduce((sum, current) => {
//     console.log(sum);
//     return 1 + 1; //boshlang'ich qiymat nolga teng
// }, 0);
// console.log(res);
/// nimaga return qilsa sumning qiymati shunga teng
// let res = num.reduce((value) => {
//     return value; //boshlang'ich qiymat nolga teng
// }, 0);
// console.log(res);
//== copyWithin() ==
// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7];
// console.log(a.copyWithin(0, 3, 6));
//== fill ==
// console.log(num.fill("wba", 2)); //2-indexdan boshlab qolganlarini wba almashtiradi
// console.log(num.fill(22, 4, 5));
// ==some()==
// console.log(num.some((value) => typeof value === "number")); // true
// console.log(num.some((value) => typeof value === "string")); // false
//== every()==
//console.log(num.every((value) => typeof value === "number"));
// console.log(num.every((value) => isNaN(value))); //false
// console.log(num.every((value) => !isNaN(value))); //true
//== forEach(), map() ==
//forEach return qaytarmaydi,map esa return qaytaradi,doim farqi shunda
// let res = num.forEach((value, index) => {
//     console.log(value + 2);
// });
// console.log("=====");
// let resmap = num.map((value, index) => {
//     // console.log(value);
//     return "Hey";
// });
// console.log(resmap);
// console.log("====");
// console.log(resmap);
//== findIndex()==
// let res = students.findIndex((value) => {
//     return value.id === 5; // indexni qaytaradi
// });
// console.log(res);
//== find()===
// let res = students.find((value) => {
//     return value.id === 5; //idsi 5ga teng bo'lganini chiqarib beradi
// }); //.name; // nameni qaytaradi
// console.log(res.year);
// console.log(
//     num.find((value) => {
//         // console.log(value);
//         // return value === 34; // 34
//         return value === 345; // undefined
//     })
// );
// ==sort()====
//let res = students.sort((a, b) => a.name.localeCompare(b.name)); // Alfabet tartibida joylashtiradi
//let res = str.sort((a, b) => a.localeCompare(b)); // taqqoslab beradi A-Z
// let res = n.sort(); // tartib bo'yicha chiqarib beradi . 10dan tepasiga ishlamaydi.Ishlasi ucgun bizga callback kerak
// let res = num.sort((a, b) => {
//     return a - b; // kattadan kichikka
//     // return b - a; // kichikdan kattaga
// });

// console.log(res);
//== filter()==
// let res = str.filter(function(value, index) {
//     return value.length <= 5; // ['apple','kiwi']
// });
// console.log(res);
// let res = num.filter((value, index) => {
//     // return true; // arrayni qaytaradi
//     // return false;// bo'sh array qaytaradi
//     // return 1; // arrayni qaytaradi
//     // return 0; // bo'sh array qaytaradi
//     // return value; // 0 ni ignore qiladi
//     //return value < 10; // 10dan kichik sonlarni qaytaradi
// });
// console.log(res);

// let res = students.filter((value) => value.id >= 5); // id si 5dan kattalar chiqadi
// // let res = students.filter((value) => value.year === 2002);
// // let res = students.filter((value) => {
// //     return value.year === 2002;
// // });
// console.log(res); // faqat year = 2002larni oladi