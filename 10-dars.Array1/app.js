// Arrays, Massivlar

// let ar = [1, "webbrain", function getFunc() {}, null, true, false, undefined];
// console.log(ar);

// let ar = [12, "hey", true, false, function() {}, null, undefined];
// console.log(ar[0]); // 12
// //Array doim noldan boshlanadi 0,1,2,3,4,5,6,7..........
// // 0-index = 1-elementga teng
// // 1-index = 2-elementga teng
// console.log(ar[7]); // undefined
// console.log(ar.length); // 7
// console.log(ar.length - 1); //6
// console.log(ar[ar.length - 1]); // undefined
// console.log(ar[ar.length - 2]); //null

// console.log(ar.at(-1)); // undefined , -lik qabul qiladi
// let ar = new Array(5); // parametri nechi bo'lsa,bizga shuncha array yasab beradi,agar string bo'lsa
// let ar = new Array("5"); // ["5"] Array elementini yasab beradi
// let ar = new Array(5, 1); //[5, 1];
// console.log(ar.length); // 5ta bo'sh item
// console.log(ar);
// let ar = [];
// ar[0] = 1;
// console.log(ar);
// console.log(ar.length);

// Agar
// ar[1] = 1;
// console.log(ar); //[ <1 empty item>, 1 ] chiqadi
// console.log(ar.length); // array uzunligi esa 2

// // ar[100] = 1;
// console.log(ar); //[ <100 empty items>, 1 ]
// console.log(ar.length); // array uzunligi esa 101

// let ar = [1, 2, 3];
// ar[1] = 1;
// console.log(ar); //[1, 1, 3];

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];

// console.log(ar1.concat(ar2)); // [1, 2, 3, 4,5, 6, 7]

// console.log(typeof ar1.toString()); // arrayni string qilib beradi
// console.log(ar1.join("")); //1234
// console.log(ar1.join(" ")); //1 2 3 4
// console.log(ar1.join("/")); //1/2/3/4

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray([])); // true
// console.log(Array.isArray("0")); // false

// let ar = [];
// console.log(ar == 0); //true // array bo'sh,nol degani,shuning uchun teng
// console.log(ar == "0"); // false

// Loops

// let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"];

// for (let i = 0; i < user.length; i++) {
//     //console.log(i);
//     console.log(i, user[i]);
// }
// for (let i = 0; i < user.length; i = i + 2) {
//     //console.log(i);
//     console.log(user[i]); // juftlarini chiqarib beradi
// }
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"];

// for (value of user) {
//     console.log(value); //Abdulloh Muhammad Sardorbek  Shohruh
// }
// for (index in user) {
//     console.log(index); // 0,1,2,3
// }
// for of valuesini qaytaradi,
// for in indexini qaytaradi

// Array Methods, array metodlari
// push(), array oxiridan qo 'shadi
// let ar = [1, 2, 3];
// ar.push(4);
// ar.push(5);
// ar.push(8, 6, 7);
// ar.push([4, 8, 6, 9]);
// // ar.pop();
// console.log(ar);
// pop() array oxiridan chiqarib tashlaydi
// unshift() array boshidan ma 'lumot qo'
// shib beradi
// shift() array boshidan ma 'lumot o'
// chiradi
// let ar = [1, 2, 3];
// ar.unshift(0);
// console.log(ar);
// [0, 1, 2, 3]
// let ar = [1, 2, 3];
// ar.shift();
// console.log(ar);
// //[2, 3];

// splice() eng powerfull metod deb atasak bo 'ladi.
// Ma 'lumot qo'
// shadi, takhirlaydi, o 'chiradi

// let ar = [1, 2, 3, 4];
// // ar.splice(0, 2); // o-indexdan boshlab 2-indexgacha kesib oladi // [3,4]
// //ar.splice(0); // dan boshlab hammasini oladi []
// // ar.splice(0, 4);
// // ar.splice(2, 3); // [1,2] 2 va 3 ni qirqib tashlab 0 va 1 qoladi
// ar.splice(0, 2, "wba", "wba"); //["wba", "wba", 3, 4];
// console.log(ar);

// let ar = [1, 2, 3, 5];
// ar.splice(2, 0, 4); // 2dan keyin qo'shadi,nol hech qanday element o'chirmasin degani
// console.log(ar);

// slice() faqat kesib oladi
// let ar1 = [1, 2, 4, 5];
// let ar2 = [1, 2, 4, 5];
// ar1.splice(0, 2); //[4,5]
// ar2.slice(0, 2); //[1,2,4,5]

// console.log(ar1.splice(0, 2)); //[1,2]
// console.log(ar2.splice(0, 2)); //[1,2]

// console.log(ar1.splice(2, 2)); // 2-indexdan boshlab nechta ma'lumot kesib olishi [4,5]
// console.log(ar2.slice(2, 2)); // 2-indexdan boshlab,2-indexgacha kesib olsin degani
// console.log(ar2.splice(1, 2)); // [2,4]
// console.log(ar2.slice(1, 2)); // [2]
// console.log(ar2.slice(1, 3)); // [2,4]
// splice arrayning asl holatiga ta 'sir o'
// tkizadi, slice esa o 'tqizmaydi
// sliceda faqat ma 'lumot olish mumkin

// indexOf()
// let ar = [1, 2, 3, 4];
// console.log(ar.indexOf(1)); // arni ichida 1 nechinchi indexda turibdi degan ma'noda // 0
// console.log(ar.indexOf(3)); // 2
// console.log(ar.indexOf(5)); // - 1 ma'lumot bo'lmasa minus -1 chiqadi

// console.log(ar.indexOf(1, 2)); // 3
// console.log(ar.indexOf(1)); // 0
// console.log(ar.lastIndexOf(1)); // 3 oxiridan qidiradi

// split() stringni arrayga o 'zgartiradi

// let str = "1, 2, 3, 4";
// console.log(str.split(",")); //[ '1', ' 2', ' 3', ' 4' ]

// //join() arrayni stringa o'zgartirib beradi

// let ar = [1, 2, 3, 4];

// console.log(ar.join("-").split("-")); // [ '1', '2', '3', '4' ]

// reverse() arrayni teskarisini chiqarib beradi

// let ar = [1, 2, 3, 4];
// // ar.reverse();
// // console.log(ar); //[ 4, 3, 2, 1 ]

// // includes() array ichida bor bo'lsa true,bo'lmasa false

// console.log(ar.includes(22)); //false
// console.log(ar.includes(2)); //true

// let ar2 = "webbrain academy";
// res = {
//     w: 1
//     e: 2
//     b: 1
//     r: 1
//     n: 1
//     c: 1
//     a: 3
//     d: 1
//     m: 1
// }
// vazifa.harflar nechtadan qatnashganini topilsin
