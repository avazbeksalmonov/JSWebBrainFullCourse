// let a = "2";
// console.log(typeof Number(a));
// let a = null;
// console.log(a + 1);
// console.log(a);

// console.log(true !== false);
// console.log(true != false);

// console.log(1 == "0" || false);
// console.log(false && "hey");
// console.log(1 !== "0" || (false && "hey"));
// console.log(1 !== "0" && false && "hey"); //false
// console.log(!(1 !== "0" && false && "hey"));//true

// console.log(true == "hey");
// console.log(false == "hey");
// console.log(true === "hey");
// console.log(false === "hey");

// ================  if else Nullish

//===SINTAKSIS==
//if("condition"){
//     'code'
// }
// else{'code'}

//else 'code'; qilib yozsak ham bo'ladi,agar codemiz bir qatordan
//iborat bo'lsa,bir qatorga sig'sa
//=============
// 0,null,undefined ===== false

// let temp = "qor";
// if (temp === "issiq") {
//     console.log("Havo issiq,yengil kiyinib oling");
// } else if (temp === "sovuq") {
//     console.log("Havo sovuq,qalin kiyinib oling");
// } else if (temp === "yomgir") {
//     console.log("Havo yomgir,soyabon olib yuring");
// } else if (temp === "qor") {
//     console.log("Havo qor,qalin kiyining"); ==bu ishlaydi
// } else {
//     console.log("Nomalum ob-havo");
// }

//====================================================

// if (temp < 0) {
//     console.log("Havo juda sovuq");
// } else if (temp < 10) {
//     console.log("Havo sovuq");
// } else if (temp < 15) {
//     console.log("Havo issiq");
// } else if (temp < 25) {
//     console.log("Havo judaa issiq");
// }
// let temp = 7; // temp > 0 && temp < 10, temp > 10 && temp <15,temp >15 && temp <25
// if (temp < 0) {
//     console.log("Havo juda sovuq");
// } else if (temp < 25 && temp > 15) {
//     console.log("Havo juda sovuq");
// } else if (temp < 15 && temp > 10) {
//     console.log("Havo issiq");
// } else if (temp < 10 && temp > 0) {
//     console.log("Havo sovuq");
// } else {
//     console.log("Not found");
// }

// let harorat = 15;

// if (harorat < 0) {
//     console.log("Havo sovuq");
// } else if (harorat < 4 && harorat > 10) {
//     console.log("Havo ortacha issiq");
// } else if (harorat < 10 && harorat > 15) {
//     console.log("Havo iliq");
// } else if (harorat < 15 && harorat > 25) {
//     console.log("Havo issiqroq");
// } else if (harorat < 25 && harorat > 40) {
//     console.log("Havo juda ham issiq");
// } else {
//     console.log("Not found");
// }

// ===========NULLISH ?? -> null ,undefined
//OR || -> null,undefined,0,false,NaN

// console.log(false || 1); // 1
// console.log(false ? ? 1);//false

// console.log(NaN || 1); // 1
// console.log(NaN ? ? 1); // NaN

// console.log(null || 1); // 1
// console.log(null ? ? 1);//1
// console.log(undefined || 1); //1
// console.log(undefined ?? 1); //1
