// Old var,Global object,IIFE,NFE
// ===> old variables <==
// let a = 10;
// console.log(a);
// {
//   let a = 10;
// }
//console.log(a); // a is not defined
// {
//   var a = 10;
// }
//console.log(a); // undefined
// a = 20;
//console.log(a); // 20

//<==IIFE -Immediately invoked function expression==>
//o'zini o'zi chaqiradi
// var a = 10;

// function get() {
//   a = 30;
// }
// get();
// a = 20;
// console.log(a); // 20
// var a = 10;
// console.log(a);
// (function () {
//   var a = 30;
//   console.log(a);
// })();
// console.log(a);
// 10,30,10
// let a = 10;
// console.log(a);
// (function () {
//   a = 30;
//   console.log(a);
// })();
// console.log(a);
// 10,30,30

//Global objects
//window/gLobalThis

globalThis.a = 10;
(function () {
  var a = 30;
  console.log(a, globalThis.a); // 30,10
})();

function test(a, b, ...rest) {
  console.log("hey js");
}
console.log(test.name); // funksiya nomini chiqarib beradi
console.log(test.length);

// NFE- Named Function Expression

const getName = function callback(name) {
  console.log(`Hi ${name}`);
  return callback();
};
getName("Webbrain");
getName("PDP");
getName("Najot Ta'lim");
//New Function
let func = new Function(`console.log("hey)`);
func();
