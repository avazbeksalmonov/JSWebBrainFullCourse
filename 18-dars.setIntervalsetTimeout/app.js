// ******setTimeout(), setInterval()***********
//syntax
// setTimeout(callback, time, arg);
// 1000= 1second
console.log(1);
setTimeout((a) => {
  console.log(2);
}, 2000);
console.log(3); // 1 3 2
// setTimeout oxirida chiqadi
console.log(1);
setTimeout((a) => {
  console.log(2);
}, 0);
console.log(3); // 1 3 2
//time 0 bo'lsa ham oxirida chiqadi
console.log(1);
setTimeout((a) => {
  console.log(2);
}, 2000);
setTimeout((a) => {
  console.log(3);
}, 1000);
console.log(4); // 1 4 3 2

console.log(1);
const get = () => {
  for (let i = 0; i <= 1000; i++) {}
  console.log(4);
};
get();
setTimeout(
  (a, b) => {
    console.log(2, a, b);
  },
  0,
  "hey",
  "bye"
);
console.log(3); // 1 4 3 2
//** setInterval */
// har berilgan secondda yuradi
let id = setInterval(() => {
  let date = new Date();
  console.log(
    `Today: ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
  );
}, 1000);
clearInterval(id); // to'xtatib qo'yadi
clearTimeout(id);
let getName = () => {
  return (name) => {
    console.log(`My name is ${name}`);
  };
};
let call = getName("Khan");
call("Khan");
getName()("Khan");
