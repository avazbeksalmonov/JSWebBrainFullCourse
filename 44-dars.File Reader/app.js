let internet = true;

const getData = () => {
    return new Promise((reject, resolve) => {
        if (internet) {
            reject("Internet ishlayapdi.....");
        } else {
            resolve("Internet ishlamayapdi....");
        }
    });
};

getData().then((res) => {
    console.log(res);
});

let obj = {
    id: 1,
    fname: "Avazbek",
    lname: "Salmonov",
    age: 25,
};

let res = `My name is ${obj.fname}, my age ${obj.age} years old `;
console.log(res);