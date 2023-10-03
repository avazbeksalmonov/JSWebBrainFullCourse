// let user = {
//   name: "webbrain",
//   _pw: 1234,
// };
// //keys,values,entries
// let proxy = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((vl) => !vl.startsWith("_"));
//   },
// });
// console.log(proxy);
// for (vl in proxy) {
//   console.log(vl); //name ni  o'zi chiqadi
// }

// let user = {
//   name: "webbrain",
//   _pw: 1234,
// };
// // let range = {
// //   from: 1,
// //   to: 10,
// // };
// Reflect.set(user, "title", "IT Center");
// let range = {
//   from: 1,
//   to: 10,
// };
// console.log(Reflect.get(user, "_pw"));
// let proxy = new Proxy(user, {
//   has(target, prop) {
//     return target.from <= prop && target.to >= prop;
//   },
// });
// range.to = 100;
// console.log(11 in proxy);

// let user = {
//   name: "webbrain",
//   _pw: 1245,
//   get() {
//     console.log(this.name, this._pw);
//   },
// };
// let data = user.get;
// data(); // undefined, this yo'qolib qoladi boshqa veriablega tenglanganda
// data.call(user); //webbrain 1245
// // user.get(); //webbrain 1245
// name = "hey"; // global

function get() {
  name = "hey";
  console.log(this.name);
}
console.log(this);
get();
