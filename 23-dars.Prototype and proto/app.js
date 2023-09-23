// ***** proto and prototype *****
// proto
let user1 = { name: "Webbrain" };
let user2 = { title: "Academy" };
// Object.assign(user1, user2);
user1.__proto__ = user2;
console.log(user1); // webbrainni o'zini chiqaradi
console.log(user1.name); // webbrain
console.log(user1.title); // Academy

// ***prototype***
let user = {
  name: "Webbrain",
  last: "Academy",
};
let user2 = {
  name: "PDP",
  last: "Academy",
};

Object.prototype.fullName = function () {
  console.log(this.name + " " + this.last);
};
// Object.fullName(user);
user.fullName();
user2.fullName();

let arr = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.remove = function (n) {
  let res = this.filter((value) => value !== n);
  console.log(res);
};
arr.remove(4);
arr.remove(1);
