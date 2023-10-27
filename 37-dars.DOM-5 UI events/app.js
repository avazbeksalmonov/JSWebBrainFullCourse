// title.addEventListener("contextmenu", () => {
//   alert("A");
// });
// // ctrl + c
// //oncopy

// title.oncopy = () => {
//   alert("Copyga ruxsat berilmagan");
// };
// // copyni o'chirib qo'yadi
// title.oncopy = () => {
//   alert("Copyga ruxsat berilmagan");
//   return false;
// };
// onkeypress
// const test = document.querySelector("#nm");
// const change = (event) => {
//   text.textContent = event.target.value;
//   console.log(event.target.value);
//   console.log(e.key, e.type, e.code);
// };
// let box = document.querySelector(".box");
// box.addEventListener("dblclick", () => {
//   alert("a"); // 2marta bosilganda
// });
// box.addEventListener("mousemove", (e) => {
//   console.log(e.y, e.x);
//   box.style.background = `rgb(${e.y} ${e.x} ${e.y})`;
// });

// Keyboard events
// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   if (e.ctrlKey && e.altKey) {
//     // ctrl bosganda o'zgaradi
//     box.style.background = `rgb(${e.y} ${e.x} ${e.y})`;
//   }
// });

//keyborad actions

// const change = (e) => {
//   //   text.textContent = event.target.value;
//   //   console.log(event.target.value);
//   console.log(e.key, e.type, e.code);
//   if (e.key == "e") {
//     alert("E klavishi bosildi");
//   }
// };
//scroll
// let box = document.querySelector(".box");
// box.addEventListener("scroll", (event) => {
//   //   console.log(
//   //     event.target.scrollTop + event.target.clientHeight + 50 >
//   //       event.target.scrollHeight
//   //   );
//   //   console.log(event.target.scrollTop + event.target.clientHeight + 50);
//   if (
//     event.target.scrollTop + event.target.clientHeight + 50 >
//     event.target.scrollHeight
//   ) {
//     box.textContent += box.textContent;
//   }
// });

// navbar projectcha :)
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY >= 18) {
    nav.style.boxShadow = `19px 12px 20px 0`;
  } else {
    nav.style.boxShadow = null;
  }
});
