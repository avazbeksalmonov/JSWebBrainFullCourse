// Function *** call(),apply(),bind()
let user = {
  name: "Webbrain",
  lastName: "Academy",
  title: "IT Center",
  getFull() {
    console.log(`${this.name} ${this.lastName}`);
  },
};
let user2 = {
  name: "Digital",
  lastName: "One",
  title: "IT Center",
  getFull() {
    console.log(`${this.name} ${this.lastName}`);
  },
};
user.getFull();
user2.getFull();

let users = [
  {
    name: "Webbrain",
    lastName: "Academy",
    title: "IT Center",
  },
  {
    name: "Digital",
    lastName: "One",
    title: "IT Center",
  },
];

function getFull(a, b) {
  console.log(a, b);
  //   console.log(this);
  console.log(`${this.name} ${this.lastName}`);
}
for (let usr of users) {
  getFull.call(usr, "eshmat", "toshmat");
  getFull.apply(usr, ["eshmat", "toshmat"]);
}
// call va apply farqi parametr qabul qilishida
// apply array ko 'rinishda qabul qiladi

getFull.call(user);
getFull({ name: "webbrain", lastName: "academy" });
// getFull.call(contex,par)

// ** bind() funksiya qaytaradi **
function getFull(a) {
  console.log(a);
  console.log(`${this.name} ${this.lastName}`);
}
let mt = getFull.bind(user, "hey");
mt();
// getFull.bind()();

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};
