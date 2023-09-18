//Scope

// ==let==
// console.log(a); //Cannot access 'a' before initialization
// // let a = 1;
// // var b = 2;
// console.log(c); //a is not defined
// ==var==
// console.log(a); // undefined beradi
// var a = 2;

// var b = 2;
// b = 3;
// console.log(b); // 3

// {
//   let b = "wba";
// }
// console.log(b); //b is not defined

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // 10

// Lexical Environment-is the environment of the function where it is written
// Lexical Environment - ham o'zini ichidagi ma'lumotni o'qiy oladi,ham tashqaridagi ham o'qib oladi
//Tashqaridagi ma'lumotlarni saqlab turuvchi memorysi bor

// let name = "webbrain";

// function getName() {
//   let b = "wba";
//   console.log(name);
//   return function () {
//     console.log(name, b);
//   };
// }

// === CLOSURE==
//CLOSURE -inner function outer variableni ishlatishiga closure,
// o'zidagi ma'lumotni tashqaridan olib kirgan functionga aytiladi
// closure
let name = "webbrain";

function getName() {
  console.log(name);
}

function outer() {
  let n = "wba";
  console.log(name);
  return function () {
    console.log(n);
  };
}

// closure
// closure emas bu function
function getFunc() {
  let name = "wba";
  console.log(name);
}
// !closure
