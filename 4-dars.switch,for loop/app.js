//==== switch,case ===

//if(condition === "yomgir")
// switch 3ta tenglikni tekshiradi,3ta kenglik bo'lishi kerak
// if ->   <,>,<=,>=,==,===
//switch ->         === faqat 3ta tenglik
// let data = "yomgir";
// switch (data) {
//   case "yomgir":
//     console.log("Bugun yomgir");
//     break;
//   case "qor":
//     console.log("Bugun qor");
//     break;
//   default: //If,elsedagi ,ELSEni o'rniga ishlatiladi
//     console.log("Havo nomalum");
// }
//Break bo'lmasa kod keyingi qismga o'tib ketib qoladi
//Masalan ->

// let obHavo = "qor";
// switch (obHavo) {
//   case "qor":
//     console.log("Bugun qor");
//   case "yomgir":
//     console.log("Bugun yomgir");
//     break;
//   default:
//     console.log("Havo nomalum");
// }
//Natija   Bugun yomgir va Bugun qor chiqadi,chunki break ishlatilmadi

// === For Loop Basic ===
// console.log("Avazbek")
// console.log("Avazbek")
// console.log("Avazbek")
// console.log("Avazbek")
// console.log("Avazbek")

// for (let i = 0; i < 5; i++) {
//   console.log("Avazbek");
// }

// For Loop syntax
// for(boshlanish,manzil,step){
// Code
//}
//  i++ == teng i=i+1
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// 0 dan 9 gacha raqamlar chiqadi konsolda
// let i = 0;
// for (; true; i++) {
//   console.log(i);
// } cheksiz loop,condition true bo'lgani uchun ishlaydi
// let i = 0;
// for (; false; i++) {
//   console.log(i);
// } Kod ishlamaydi,chunki condition false
// =======================================
// for (let i = 0; i < 10; i = i + 2) {
//   console.log(i);
// } 0,2,6,8 chiqadi
// for (let i = 0; i <= 10; i = i + 2) {
//   console.log(i);
// }// 0,2,6,8,10 chiqadi
// =================================
// let i = 1;
// for(;;){
//     console.log(i);
// } cheksiz loopga tushib qoladi

// let i = 1;
// for (i = 1; i < 12; i++) {
//   // console.log(i)
// }
// console.log(i);  12chiqadi,1tadan oshib
// for (let i = 1; i < 12; i++) {
//   //   console.log(i);
// }
// console.log(i); //Reference error beradi,chunki i o'zgaruvchini faqat scope ichida
//ishlata olamiz\

// var i = 1;
// for (var i = 1; i < 12; i++) {
//   //   console.log(i);
// }
// console.log(i); // varda esa global bo'ladi scope ichida ham ishlayveradi

// for (i = 1; i < 10; i++) {
//   //console.log(i);
// }
// console.log(i);

// ====Break and Continue
// let sum = 0;
// for (let i = 1; i < 12; i++) {
//   console.log(`Sum = ${sum} + ${i} = ${(sum += i)} `);
//   if (i === 10) {
//     break;
//   }
// }
//NATIJA :
// Sum = 0 + 1 =1
// Sum = 1 + 2 =3
// Sum = 3 + 3 =6
// Sum = 6 + 4 =10
// Sum = 10 + 5 =15
// Sum = 15 + 6 =21
// Sum = 21 + 7 =28
// Sum = 28 + 8 =36
// Sum = 36 + 9 =45
// Sum = 45 + 10 =55

// for (i = 0; i < 128; i++) {
//   console.log(i);
//   i += i;
// }

// 1=1
// 2+1=3
// 3+3+1=7
// 7+7+1=15
// 15+15+1=31
// 31+31+1=63
// 63+63+1=127

// for (i = 1; i < 12; i++) {
//   console.log(i);
//   i = i * 2;
// }
//1
//2*1+1=3
//3*2+1=7
// =====Juft va toq sonlarni chiqarish
// for (i = 1; i < 12; i++) {
//   if (i % 2 === 0) console.log(`juft son ${i}`);
//   else console.log(`toq son ${i}`);
// }
// toq son 1   =1 qoldiq
// juft son 2  =0 qoldiq
// toq son 3   =1 qoldiq
// juft son 4  =0 qoldiq
// toq son 5   =1 qoldiq
// juft son 6  =0 qoldiq
// toq son 7   =1 qoldiq
// juft son 8  =0 qoldiq
// toq son 9   =1 qoldiq
// juft son 10 =0 qoldiq
// toq son 11  =1 qoldiq
//=========Faqat toq sonni topish
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log("Bu son toq son", i);
//   }
// }
// 3ga bo'linadigan sonlarni chiqarmaslik
// for (let i = 0; i <= 12; i++) {
//   if (i % 3 === 0) {
//     continue; //3ni chiqarmaydi,6,9 ni ham 3ga bo'linadigan sonlarni chiqarmaydi
//   }
//   console.log(`${i}`);
// }
//=========<>===========
//for (let i = 10; i >= 1; i--) {
//   console.log(i);
//}
// Natija
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// ====><====
// 10 + 1
// 9 + 2
// 8 + 3
// 7+4

// for (let i = 10; i >= 1; i--) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i);
//   }
//   //   console.log(i);
// }
// 10ta 10,9ta 9,8ta 8...1ta 1

// for (let i = 10; i >= 1; i--) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(j); //10marta,1dan 10gacha raqamlar chiqadi
//   }
//   //   console.log(i);
// }

// outher: for (let i = 1; i <= 10; i += 3) {
//   inner: for (let j = 1; j <= 10; j += 3) {
//     if (i === 4) break outher; tashqaridagi loopni ham to'xtatib beradi
//     console.log(j, "j"); //10marta,1dan 10gacha raqamlar chiqadi
//   }
//   console.log(i, "i");
// }

outer: for (let i = 1; i <= 5; i++) {
    inner: for (let j = 1; j <= 5; j++) {
        if (i <= 2) break outer;
        console.log(j, "j"); //10marta,1dan 10gacha raqamlar chiqadi
    }
    console.log(i, "i");
}