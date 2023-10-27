// function onclick() {
//     console.log("Click");
// }

// function onmousedown() {
//     console.log("Mousedown");
// }

// function onmouseup() {
//     console.log("Mouseup");
// }
// // class orqali eventlarni boshqarish
// class Events {
//     handleEvent(event) {
//         // console.log(event);
//         switch (event.type) {
//             case "click":
//                 onclick();
//                 break;
//             case "mousedown":
//                 onmousedown();
//                 break;
//         }
//     }
// }
// const evn = new Events();
// button.addEventListener("click", evn); // clickni o'zi ishlaydi
// button.addEventListener("mousedown", evn);
// button.addEventListener("mouseup", evn);

// event bubling , eventlarni ko'tarilishi

// function child(event) {
//     // event.stopPropogation(); // skip, o'zidan keyingi malumotlarni yurgizadi
//     event.stopImmediatePropagation(); //o'zidan kngi ma'lumotlarni yurgizdirmaydi
//     console.log(event);
//     alert("child");
// }
// const parent = () => {
//     alert("parent");
// };
// const grand = () => {
//     alert("grand");
// };
// let target;
// table.onclick = function(event) {
//     if (target) {
//         target.classList.remove("highlite");
//     }
//     target = event.target;
//     target.classList.add("highlite");
// };

//preventDefault - browserni default actionlarni to'xtatib qo'yadi
const onbutton = (event) => {
    event.preventDefault();
    alert("A");
};