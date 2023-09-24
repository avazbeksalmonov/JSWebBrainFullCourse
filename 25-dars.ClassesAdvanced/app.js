// Classes Advanced
// static variable static method

class Webbrain {
    age = 0;
    static year = 0; // static variable
    static getYear() {
        // static method
        console.log(++this.year);
    }
    getAge() {
        console.log(++this.age);
    }
}

let st1 = new Webbrain();
let st2 = new Webbrain();

// st1.getYear(); // 1
// st1.getYear(); // 2
// st1.getYear(); // 3
// st2.getYear(); // 1

Webbrain.getYear(); // 1
Webbrain.getYear(); // 2
Webbrain.getYear(); // 3
Webbrain.getYear(); // 4
Webbrain.getYear(); // 5
Webbrain.getYear(); // 6
console.log("==================");

st1.getAge(); // 1
st1.getAge(); // 2
st1.getAge(); // 3
st2.getAge(); // 1

//**Private and protected */

// class Protected {
//     _name = "webbrain";

//     #protected = "dont touch it";

//     get getName() {
//         console.log(this.#protected);
//     }
//     set getName(vl) {
//         this.#protected = vl;
//     }
// }

// let pr = new Protected();
// pr.getName= "I want don't touch it"; // getter setter oralai o'zgartirsa bo'ladi
// pr.getName;
// console.log(pr._name); // webbrain
// console.log(pr.getName()); //dont touch it

// ** Build in class

// class Ar extends Array {}
// let ar = new Ar();
// ar = ["Olma"];
// console.log(ar.length);
// console.log(ar);

// ** Instance

// class Ar extends Array {}

// let ar = new Ar();
// let a = () => {};
// let b = 7;

// console.log(ar instanceof Array); // true
// console.log(ar instanceof Object); // true
// console.log(a instanceof Object); // true
// console.log(b instanceof Object); // false

//sassdagi @mixinsga o'xshash

class Users {
    getName() {
        console.log("No Name");
    }
}

let obj = {
    info() {
        console.log("No Info");
    },
};

Object.assign(Users.prototype, obj);

let ur = new Users();
ur.info();
// objni ichidagi hamma malumot Usersni ichiga o'tib qoladi