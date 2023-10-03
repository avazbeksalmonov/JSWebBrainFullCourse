//Document Object Module
// window.alert("Hi");
// alert("Hii");
// alert(window.innerHeight);
// alert(window.innerWidth);
// alert((document.title = "Module"));
// console.log(document.location.href);
// console.log(document.location.pathname);
// console.log(document);
// console.log(window);

// let ul = document.getElementsByTagName("ul")[0];

// console.log(ul.children); // html collection
// console.log(ul.childNodes); //node list chiqadi

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild.nextElementSibling); // null
// console.log(ul.lastElementChild.previousElementSibling.previousElementSibling); //ichma-ich kirib ketadi
// console.log(ul.firstChild);

// Selectorlar

// let by = document.getElementsByTagName("body")[0];
// // console.log(by);
// // by.style.background = "red";
// // by.style.color = "white";
// let parent = document.getElementsByClassName("parent");
// console.log((parent[0].style.background = "red"));

// let id = document.getElementById("bir"); // birinchi ko'rgan bir nomli idni oladi
// console.log(id);
// id.style.color = "white";

// query selector
let qr = document.querySelector(".parent"); // birincgi ko'rganini oladi
let bir = document.querySelector("#bir");
// console.log(qr);
// console.log(bir);

// let qrAll = document.querySelectorAll("#bir"); // massiv ko'rinishida qaytaradi
// console.log(qrAll);

//innerHTML
console.log(qr.innerHTML); // tag bilan qo'sha olamiz
console.log(qr.innerText);
console.log(qr.textContent);

qr.innerHTML = "<h1>InnerHTML</h1>";

// hidden - display: "none"; ga alternative desa ham bo'ladi

qr.hidden = false; // none
qr.hidden = false; // block
