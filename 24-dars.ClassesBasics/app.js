// class Users {
//     age = 0;
//     fullName(name) {
//         console.log(++this.age, name);
//     }
// }

// let user1 = new Users();
// let user2 = new Users();
// user1.fullName("Webbrain"); // 1 Webbrain
// user1.fullName("PDP"); // 2 PDP
// user1.fullName("Najot Talim"); // 3 Najot Talim
// user2.fullName(); //1

// ****Parametrlari**
// Ma'lumotlarni constructorda tutib oladi
// Class chaqirilgan vaqtda doim constructor yuradi 1-navbatda
class Users {
    constructor(title) {
        this.title = title; // paranteni parametrini olish.Titleni global qilib qo'yiladi
    }
    name = "Webbrain"; // global variable
    set welcomeMsg(value) {
        // setter
        console.log(value);
        // console.log(this);
        console.log(`Hi ${this.title} Welcome to ${this.name}`); // parentini paramertini oladi
    }
    get welcomeMsg() {
        // getter
        // console.log(this);
        console.log(`Hi ${this.title} Welcome to ${this.name}`); // parentini paramertini oladi
    }
}
let user1 = new Users("Toshmat");
let user2 = new Users("Eshmat");

user1.welcomeMsg = "Webbrain";

user1.welcomeMsg;
user2.welcomeMsg();

// ** Computed named **

class Users {
    ["web" + "brain"](title) {
        console.log(title);
    } // webbrain(){} ni yasab beradi
}
let user1 = new Users();
let user2 = new Users();
user1.webbrain("Webbrain");

// <******* Inheritance *******>

class Animals {
    speed(speed) {
        console.log(`Runs ${speed}km per hour`);
    }
}
class Rubbit {
    info(name) {
        console.log(`${name}ni ikkita qulogi bor`);
    }
}
class Wolf {
    info(name) {
        console.log(`${name}ni ikkita qulogi bor`);
    }
}
let animal = new Animals();
let rubbit = new Rubbit();
let wolf = new Wolf();

rubbit.info("Quyon");
animal.speed(12);
console.log("===============");
wolf.info("Bo'ri");
animal.speed(15);

///***  extends***
class Animals {
    speed(speed) {
        console.log(`Runs ${speed}km per hour`);
    }
}
class Rubbit extends Animals {
    info(name) {
        console.log(`${name}ni ikkita qulogi bor`);
    }
}
class Wolf extends Animals {
    info(name) {
        console.log(`${name}ni ikkita qulogi bor`);
    }
}
let rubbit = new Rubbit();
let wolf = new Wolf();

rubbit.speed(12);
rubbit.info("Quyon");
console.log("===============");
wolf.speed(15);
wolf.info("Bo'ri");

// *** super **
// childni ichida turib parenti ma'lumotini chqarish uchun
class Animals {
    // parent() {
    //     console.log("U r calling parent");
    // }
    speed(speed) {
        console.log(`Runs ${speed}km per hour`);
    }
}
class Rubbit extends Animals {
    child() {
        console.log("U r calling child");
    }
    info(name) {
        // this.child();
        // super.parent(); // parentni metodidan foydalanish
        console.log(`${name}ni ikkita qulogi bor`);
    }
}

let rubbit = new Rubbit();

rubbit.speed(12);
rubbit.info("Quyon");
console.log("===============");
// parent ichida childni parametrini joylash,ishlatish
class Animals {
    constructor(name) {
        this.name = name;
    }
    speed(speed) {
        console.log(`${this.name} ${speed}km pes hour`);
    }
}
class Rabbit extends Animals {
    constructor(name) {
        super(name); //  superga ma'lumot berishimiz kk
        // console.log(name);
    }
    info(name) {
        console.log("Quyonni 2ta qulog'i bor");
    }
}
// class Rabbit extends Animals {
//     constructor(...args) {
//         super(...args); //  superga ma'lumot berishimiz kk
//         // console.log(name);
//     }
//     info(name) {
//         console.log("Quyonni 2ta qulog'i bor");
//     }
// }
let rb = new Rabbit("Quyon");
let tl = new Rabbit("Tulki");
rb.speed(12);
tl.speed(15);

class Animals {
    constructor(name) {
        console.log(name);
    }
}
class Rabbit extends Animals {
    constructor(...args) {
        super(...args);
    }
}

let rb = new Animals("Quyon");
let tl = new Rabbit("Tulki");