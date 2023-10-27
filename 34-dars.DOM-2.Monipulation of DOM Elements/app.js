// let parent = document.querySelector(".parent");
// let btn = document.querySelector(".btn");
// let btn1 = document.querySelector(".btn1");
// console.log(parent.hasAttribute("class")); // true
// console.log(parent.hasAttribute("type")); // false
// // parentni ichida class bormi yo'qmi tekshiradi

// console.log(parent.getAttribute("class")); //parent
// console.log(parent.getAttribute("type")); // null
// attributni o'zini qaytaradi, bo'lmasa null qaytaradi
// parent.setAttribute("id", "border"); //border idni qo'shdi parentga
// parent.setAttribute("class", "background"); //background classni qo'shdi

// btn.addEventListener("click", () => {
//     parent.setAttribute("class", "background");
// });
// btn1.addEventListener("click", () => {
//     parent.setAttribute("class", "background-none");
// });
// parent.removeAttribute("class"); // o'chirib yuboradi

// ****------- createElement------*****
// let parent = document.querySelector(".parent");
// let div = document.createElement("div");
// let text = document.createTextNode("Hey DOM");
// div.setAttribute("id", "border");
// console.log(text);
// div.prepend(text);
// // append boshidan, prepend oxiridan qo'shadi
// // parent.before(div); // parent tepasidan qo'shadi
// parent.append(div); // parentni pastidan qo'shadi
// parent.prepend(div); // parentni boshidan qo'shadi
// div.remove(); // o'chirib tashlaydi

// // cloneNode

// div = parent.cloneNode(true); // divga pranetni ma'lumotlarini ko'chirib,clone qilib beradi
// console.log(div.hasAttribute("class")); // true
// console.log(div.getAttribute("class")); // parent
// console.log(div);

// ***---- style element ----***

// parent.style.background = "red";

// parent.style.fontSize = "20px"; // camelCase bo'lishi kerak
// *** --- cssText---***
parent.style.cssText = `
 color: white;
 background: blue;
`;

let element = parent.children[0].children;
console.log(parent.children[0].children);
for (let i = 0; i < element.length; i++) {
    if (i % 2 == 0) {
        element[i].style.color = "red";
    } else {
        element[i].style.color = "blue";
    }
}

Array.from(element).forEach((el) => {
    el.style.color = "red";
});
/// geometry

// let parent = document.querySelector(".parent");
// console.log(parent.clientHeight);
// console.log(parent.scrollHeight);
// console.log(parent.offsetTop); // yuqoridagi malumotgacha bo'lgan bo'sh joyni pixeli
// console.log(parent.offsetLeft); // chap tomondagi bo'sh joy
// console.log(parent.offsetWidth); // width 150 + padding 20+20 + border 2+2 = 194 px
// console.log(parent.offsetHeight); // huddi shunday 194 chiqadi, height ham 150px bo'lgan uchun
// console.log(parent.clientWidth); // o'zini uzunligini oladi, borderni hisobga olmaydi
// console.log(parent.clientTop); // 2

/// ***--- scroll ---***
//

// console.log(parent.scrollHeight); // scrollni uzunligi
// console.log(parent.scrollWidth); // scroll uzunligi yon tomonga
let btn = document.querySelector("button");
let add = document.querySelector(".add"),
    toggle = document.querySelector(".toggle");

function expend() {
    if (parent.clientHeight === parent.scrollHeight) {
        parent.style.height = "150px";
        btn.innerHTML = "show more";
    } else {
        parent.style.height = `${parent.scrollHeight}px`;
        btn.innerHTML = "show less";
    }
}

// ***--- classList ---***
// ***add*** class qo'shadi
add.addEventListener("click", () => {
    parent.classList.add("add");
});
// ***toggle*** ham bosganda qo'shadi va o'chiradi
toggle.addEventListener("click", () => {
    parent.classList.toggle("add");
});
///***--- remove()---**** o'chirib yuboradi classni */
add.classList.remove("add");
// console.log(add);
// *** classList.contains("class")  true,yoki false qaytaradi-checks for the given class,return true/false

btn.addEventListener("click", () => {
    if (parent.classList.contains("add")) {
        console.log("Contains ishladi");
    } else {
        console.log("Contains ishlamadi...");
    }
});

// window, ** scrollBy **
// scroll(x,y);
function sr() {
    parent.scroll(0, parent.scrollHeight);
    console.log(parent.scrollHeight);
}

// scrollBy , har bosganda o'zgarib boradi
// function sr() {
//     parent.scrollBy(0, 10); // 10px dan pastga tushadi
//     console.log(parent.scrollHeight);
// }

// parent.scroll(0, parent.scrollHeight);

// function sr() {
//     parent.scrollBy(0, -10); // yuqoriga
// }

// ** scrollTo **

// parent.scroll(0, parent.scrollHeight);

// function sr() {
//     parent.scrollTo(0, 50); // 50px pastga tushiradi to'xtaydi
// }

// ** scrollX,scrollY

let parent = document.querySelector(".parent");

// *** getBoundingClientRect()

console.log(parent.getBoundingClientRect()); //Barcha ma'lumotlarni chiqarib beradi

// DOMRect {x: 8, y: 100.59375, width: 154, height: 154, top: 100.59375, …}
// bottom: 254.59375
// height : 154
// left:  8
// right: 162
// top: 100.59375
// width:  154
// x :  8
// y :  100.59375
// [[Prototype]]: DOMRect