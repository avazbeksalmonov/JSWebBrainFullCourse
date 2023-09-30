//Generator function
// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Work");
//   }, 1000);
// });
// const getData = async () => {
//   let res = await data;
//   console.log(res, "testing");
// };
// getData();
// console.log("Working...");

//// *** Generator funksiya ***
//multiple returnga qaytadigan funksiyaga aytiladi
yield,
return

function* getData() {
    yield 1;
    yield 2;
}

const generator = getData();
const generator2 = getData();
console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); //{ value: undefined, done: true }
console.log(generator2.next()); //{ value: 1, done: false }

//loop

for (value of generator) {
    console.log(value);
}

// console.log([...generator]);
// *** Ma'lumot qo'shish
// function* getData() {
//   yield 1;
//   yield 2;
// }

const generator = getData();

let users = [
    { id: 1, name: "Eshmat1" },
    { id: 2, name: "Eshmat2" },
    { id: 3, name: "Eshmat3" },
    { id: 4, name: "Eshmat4" },
    { id: 5, name: "Eshmat5" },
    { id: 6, name: "Eshmat6" },
];
const onDelete = (id) => {
    let res = users.filter((vl) => vl.id !== id);
    users = res;
};
const add = (usr) => {
    users = [...users, { id: 7, name: usr }];
};
const add = (usr) => {
    users = [...users, { id: users.length + 1, name: usr }];
};
// onDelete(3);
add("Gulbashakar1"); // 7
onDelete(3);
add("Gulbashakar2"); // 7
add("Gulbashakar3"); // 8
onDelete(7);
console.log(users);

function* getData() {
    let id = users.length;
    while (true) {
        yield ++id;
    }
}
const generator = getData();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
let users = [
    { id: 1, name: "Eshmat1" },
    { id: 2, name: "Eshmat2" },
    { id: 3, name: "Eshmat3" },
    { id: 4, name: "Eshmat4" },
    { id: 5, name: "Eshmat5" },
    { id: 6, name: "Eshmat6" },
];
const onDelete = (id) => {
    let res = users.filter((vl) => vl.id !== id);
    users = res;
};
const add = (usr) => {
    users = [...users, { id: generator.next().value, name: usr }];
};
add("Gulbashakar1"); // 7
onDelete(3);
add("Gulbashakar2"); // 7
add("Gulbashakar3"); // 8
// onDelete(7);
console.log(users);

function* getData() {
    let id = 0;
    while (true) {
        yield ++id;
        if (id === 3) {
            return id;
        }
    }
}
const generator = getData();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* getData(param) {
    //   for (vl of param) {
    //     let newVl = yield vl;
    //     console.log(newVl);
    //   }
    let i = 0;
    while (true) {
        let gn = yield ++i;
        if (gn) i += gn;
    }
}
const generator = getData([1, 2, 3, 4]);

console.log(generator.next());
console.log(generator.next(3));
console.log(generator.next(4));