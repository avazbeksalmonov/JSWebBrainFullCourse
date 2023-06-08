// == do while, functions

// while (true) {
//     console.log("hey");
// }

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }
// do {
//     console.log(i);
//     i--;
// } while (i);
// ====Syntax while loop
// let i = 0 /// masalan
// while(condition){
//     // code block
// }
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// ====Syntax do while===
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// ======FUNCTIONS=====
// ===Syntax===
// function nameFunc(parametr1,parametr2.parametr3){
//     //code block
// }
// nameFunc(argument1,argument2....)
//
// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// console.log(myFunction(2, 3));
// function getAvr( ) {
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
//     console.log("webbrain");
// }
//===================================
// console.log(id);
// let id = 1; xatolik beradi kod,variabledan oldin ishlatganimiz uchun

// function getAvr() {
//     console.log("Avazbek,Welcome to WebBrain!");
// }
//===============
//functionlarni create qilish yo'llari
//1)Function decloration,
//2)Function expression,
//3)Arrow function
// ===============

//1)
// getAvr()
//function getAvr(){
//console.log("Hi ");
//}
//funksiyadan oldin chaqirishimiz
//mumkin fucntion declorationda
// function expressionda chaqira olmaymiz
//funksiyadan oldin
//=========
// getAvr();
// const getAvr = function(){
//console.log("Hi ");
//}
//xatolik beradi
//=======
//Arrow function
// getAvr();
// const getAvr = () => {
//     console.log("Hi");
// };

// const getAvr = (name, surname, age) => {
//     console.log(`Name:${name}`);
//     console.log(`Surname:${surname}`);
//     console.log(`Age:${age}`);
//     console.log("-===============-");
// };
// getAvr("Avazbek", "Salmonov", 25);
// getAvr("Doston", "Familiya F", 24);
// getAvr("Asilbek", "Familiya F", 25);
// getAvr("Rahinjon", "Familiya F", 22);

//     Name:Rahinjon
//     Surname:Familiya F
//     Age:22

//
// let name = "WebBrain";
// const test = () => {
//     let name = "Academy";
//     console.log(name);
// };

// test();
// console.log(name);

// const telegram = (name, surname) => {
//     //     if (surname) console.log(name, surname);
//     //     else console.log(name);
//     // surname ? console.log(name, surname) : console.log("name");
//     console.log(name, surname || "");
// };
// telegram("webbrain", "academy");

// ==== return ====

// const gpa = () => {};
// console.log(gpa()); // undifined

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//     let result = (a + b + c + d) / 4;
//     console.log(result);
//     // return "okay";
// };
// console.log(gpa(4.5, 3.2, 3.4, 3.6));
// console.log(gpa(4.2, 3.2, 3.4, 3.6));
// console.log(gpa(4.1, 3.2, 3.4, 3.6));

// console.log(
//     gpa(4.5, 3.2, 3.4, 3.6) +
//     gpa(4.2, 3.2, 3.4, 3.6) +
//     gpa(4.2, 3.2, 2.4, 3.6) / 3
// );
// const getNum = (a) => {
//     let total = 193;
//     console.log((a * 100) / total);
//     return (a * 100) / total;
// };
// console.log(parseInt(getNum(159)));