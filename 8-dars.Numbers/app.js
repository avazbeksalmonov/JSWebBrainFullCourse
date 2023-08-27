// let name = "webbrain";

// let obj = { name: "test", child: { name: "name" } } = obj;

// const = { name: newName, child: { name: test } } = obj;
// let obj = { name: "test", child: { name: "name" } };
// console.log({...obj });

//== Numbers == //

// console.log(1000000);
// console.log(100 _000_000);

// console.log(12.5665465);

// // 1 mlnni shu tarzda yozib olsak bo'ladi. 1e6 1dan kn 6ta nol

// console.log(1e6);
// console.log(1e6 + 1); // 10000001
// console.log(1e6 - 1); // 9999999

// console.log(1e-6 + 1); // 1.000001

// console.log(1e500); // infinity

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.2 + 0.2 === 0.4); // true
// console.log(0.2 + 0.5 === 0.7); // true

// /// 1/3 = 0.333333333 son davrda chiqqani uchun,oxirida yaxlitlagani
// // uchun 4 bo'ladi.Shuning uchun false qaytaryapdi

// console.log(0.1 + 0.2); //0.30000000000000004

// == toFixed() == //

// console.log(Number(0.1 + 0.2).toFixed(1)); //yaxlitlab beradi, kasr qismida nechta son qolishi kerakligini belgilaydi // 0.3
// console.log(Number(0.1 + 0.2).toFixed(2)); // 0.30

// console.log(typeof Number(0.1 + 0.2).toFixed(1)); // type stringda

// let num = 0.1 + 0.2;

// console.log(typeof Number(num.toFixed(1))); // Number type

// == parseInt() == //

// let num = "0.1 + 0.2";

// console.log(parseInt(num)); // parseInt ko'rgan birinchi raqamini oladi //0
// console.log(parseFloat(num)); // parseFloat ko'rgan birinchi sectionini oladi// 0.1

// console.log(Number(num)); // Nan qaytaradi

// console.log(Number(eval(num))); // Number type qaytaradi //console.log(eval(num))

// console.log(Number.parseInt(num));
// console.log(Number.parseFloat(num));

// let num = "0.1 + 0.2*1";

// console.log(+"1_000" + 1); //NaN

// let num = 5;

// console.log(num.toString(2)); // stringa o'tqizib beradi
// // 101 ikkilik sanoq sistemasiga o'tqizib beradi. binaryga o'tqizib beradi
// console.log(parseInt("101", 2)); // 5 oddiy raqamga o'tqizib beradi
// 1-001
// 2-010
// 3-011
// 4-100
// 5-101

// console.log(isNaN(+"1000")); // false
// console.log(isNaN(555)); // false
// == Object.is()==

// let result = Object.is("web", "web");
// console.log(result); // true  // ikkita stringni bir-biriga teng yoki tengmasligini aniqlab beradi
// == toPrecision() ==/
// let num = 5.112154;

// console.log(num.toPrecision(2)); // 5.1
// console.log(num.toPrecision(3)); // 5.11

// console.log(9_999_999_999_999_999); 1000000000000

// === Math === // build in function

// console.log(Math.PI); //3.141592653589793
// console.log(Math.abs(-10.3)); // 10
// console.log(Math.round(2.5)); // 3 // Yaxlitlaydi tepaga
// console.log(Math.round(2.4)); // 2 // Yaxlitlaydi pastga

// // 0  1 2 3 4 <="5"=> 6 7 8 9

// console.log(Math.floor(10.999)); // 10 pastga yaxlitlaydi
// console.log(Math.ceil(10.001)); // 11 tepaga yaxlitlaydi

// console.log(Math.trunc(10.999)); // 10 kars qismini chiqarib tashlaydi, floor bilan farqi

// console.log(Math.floor(-10.999)); // -11
// console.log(Math.trunc(-10.999)); // -10

// <== Random ==> // // tasodiy raqam oladi

// console.log(Math.random()); // 0 bn 1 orasidagi raqamni chiqarib beradi

// 10
// 100
// 1000

// console.log(parseInt(Math.random() * 10)); // butun son chiqaradi 10 gacha
// console.log(parseInt(Math.random() * 100)); // butun son chiqaradi 100gacha
// console.log(parseInt(Math.random() * 1000)); // butun son chiqaradi 1000gacha

// === Min va max === //

// console.log(Math.min(1, 2, 5, 6, 8, 9, 7)); // eng kichigi
// console.log(Math.max(1, 2, 5, 6, 8, 9, 7)); // eng kattasi

// // == pow == // darajaga ko'taradi
// console.log(Math.pow(6, 2)); // 36
// console.log(Math.pow(3, 4)); // 81 === console.log(3 ** 4 )

// == sqrt == //

// console.log(Math.sqrt(16)); // 4 ildizdan chiqadi
// console.log(Math.cbrt(27)); // 3 kubinchi daraja

// == sign == / 1,0,-1
//Agar son musbat bo'lsa 1 qaytardi, manfiy bo'lsa -1 qaytaradi, 0 bo'ladigan bo'lsa 0; -0 bo'lsa -0 qaytaradi

// console.log(Math.sign(-0));
// console.log(Math.sign(0));
// console.log(Math.sign(123));
// console.log(Math.sign(-123));
// console.log(Math.sign("-123"));

// console.log(Math.sign(2));
// console.log(Math.sign(-2));
// console.log(Math.sign(-0));
// console.log(Math.sign(0));

// let obj = { name: "webbrain", child: null };
// console.log(obj.child.age); // error qaytardi
// console.log(obj.child?.age); // undefined qaytaradi

// Vazifa
// 1.Eng katta raqamdan kichigini ayirish
// let max = Math.max(6, 7, 8, 9, 80, 70);
// let min = Math.min(10, 4, 5);

// let result = max - min;
// console.log(result);

// 2. 1 dan 50 gacha random raqam topilsin

// function getNum(min, max) {
//     console.log(parseInt(Math.random() * max));
// }

// getNum(1, 50);
// let maxNum = +prompt("Raqam kiriting");

// function getNum(min, max) {
//     console.log(parseInt(Math.random() * max));
// }
// getNum(1, maxNum);