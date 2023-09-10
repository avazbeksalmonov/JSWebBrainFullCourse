//newMap,newSet,weekMap,weekSet
// let obj = {};

// let map = new Map();

// obj.name = "webbrain";
// // map.name = "Webrain";
// map.title = "Webrain";

// map.set(123, "IT Center");
// map.set("title", "IT Center");
// map.set("name", "IT Center");
// // =delete()=
// // console.log(map.delete(123));
// console.log(map.clear());
// console.log(map);
// map.set(123, "IT Center"); istalgan datatypeni key sifatida ishlata olamiz
// console.log(map.size, map.get("name"));
// console.log(obj, obj.name);
// console.log(map.size, map.name);
// == has()== mapni ichida name bormi yo'qmi degani
//bor bo'lsa true,yo'q bo'lsa false
// console.log(map.has("name")); // true
// console.log(map.has("title")); // fasle

// let map = new Map([
//     ["name", "webbrain"],
//     ["title", "IT Center"],
// ]);
// //map.set("name", "wba"); // oxirgisini oladi
// console.log(map.title); // undefined
// console.log(Object.fromEntries(map)); // object qilib beradi
// console.log(Object.fromEntries(map).title);
// map.forEach((element) => {
//     console.log(element);
// });
// mapda error beradi
// map.map((element) => {
//     console.log(element);
// });
// let gen = map.entries();
// gen.next();
// // gen.next();

// console.log(gen.next());
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (let vl of map.entries()) {
//     console.log(vl);
// }
// for (let vl of map.values()) {
//     console.log(vl);
// }
// for (let vl of map.keys()) {
//     console.log(vl);
// }

/// set  , value collection
// let obj = { name: "webbrain" };

// function name(params) {
//     console.log();
// }
// let set = new Set();
// set.add("eshmat");
// set.add("toshmat");
// set.add("eshmat");
// // set.add(obj);
// // set.add(name);
// console.log(set.has("eshmat")); //true
// console.log(set.has("toshmat")); //true
// console.log(set.has(obj)); // true
// console.log(set.has(name)); // true

// == new Map(), weekMap() ==
// let map = new Map([
//     ["name", "webbrain"],
//     ["title", "IT Center"],
// ]);
// map = null; // reference o'zgarib ketadi,garbage collection bo'lib qoaldi
// console.log(map);
// Garbage collection bo'lmasligi uchun
// let map = new WeakMap([
//     ["name", "webbrain"],
//     ["title", "IT Center"],
// ]);
// let obj = { data: map };

// map = null;
// console.log(map);