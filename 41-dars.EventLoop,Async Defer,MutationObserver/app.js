// Event Loop - JS engine a task/exucutes them and sleep/ wait a task
//Task queue
//--- microtask - tasks which doesn't wait exucation time
//--- macrotask - tasks in the queue

// ** DOMContentLoaded ** - html yuklangandan keyin yuradi
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("HEY");
//   test.innerText = "lorem";
//   console.log(performance.now()); // qancha vaqtda ishlashini ko'rsatadi/ millisekundda
// });
// // ** load ** - img, hamma fayllar yuklangandan keyin yuradi
// window.onload = () => {
//   console.log("hey");
//   test.innerText = "lorem";
//   console.log(performance.now());
// };

//Async / Defer - img ref
// *** general ** - parse HTML / download js / execute js / continue html parse
// *** async *** - parse HTML and download js in the same time then execute parse
// *** defer *** - parse HTML and download js in the same time completely
// ** explain by execute order in html!

// beforeunload/unload - leaving the page - boshqa bir sahifaga chiqib ketayotganda ishlatiladi

// test.innerText = "lorem";
// window.onbeforeunload = () => {
//   return true; // saytdan chiqishdan oldin ruxsat so'raydi
// };

// Mutation observer

let observer = new MutationObserver(() => {
  console.log("Working...");
});
let parent = document.querySelector("#parent");
observer.observe(parent, {
  childList: true,
  subtree: true,
  characterData: true,
  attributes: true,
});
// btn.onclick = () => {
//   //   test.innerText = "Test";
//   desc.innerHTML = "new data";
//   //   parent.innerText = "new data";
// };
btn.onclick = () => {
  parent.classList.add("title");
};
