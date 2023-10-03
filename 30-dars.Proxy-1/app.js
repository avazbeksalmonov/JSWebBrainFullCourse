// Proxy

let user = {
  name: "webbrain",
  _stir: 123456,
};
let proxy = new Proxy(user, {
  get(target, prop) {
    // console.log(target, prop);
    return target[prop];
  },
});

console.log(user);
console.log(proxy.eshmat); // hey wba, returndan qaytgan qiymat chiqadi
console.log(proxy.name); // webbrain
console.log(proxy._stir); // 123456

// "_", pastgi chiqizcha bilan boshlangan ma'lumotni
// ekranga chiqarmaydigan qilish

let user = {
  name: "webbrain",
  _stir: 123456,
};
let proxy = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) return `Access for ${prop} is denied `;
    return target[prop];
  },
});
console.log(proxy._stir); //Access for _stir is denied
console.log(proxy.name); // webbrain
console.log(proxy.lname); // undefined
