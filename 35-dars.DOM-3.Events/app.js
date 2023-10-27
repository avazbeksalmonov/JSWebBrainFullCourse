// function al() {
//   alert("HeY DOM");
// }

// function al(n) {
//   console.log(n);
// }

// function move(e) {
//   //   console.log("Y", event.y, "X", event.x);
//   console.log(e);
// }
//id ga biriktira olamiz

// btn.onclick = function () {
//   console.log("Hey");
// };
import { users } from "./main.js";
let user = users;

function onDelete(id) {
  let res = user.filter((vl) => vl.id !== id);
  user = res;
  container.innerHTML = null;
  readData();
}

function readData() {
  if (!user.length) {
    container.innerHTML = "No data";
  }
  user.forEach((value) => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = " Delete ";

    btn.addEventListener("click", () => {
      onDelete(value.id);
    });

    div.innerHTML = `${value.id}-${value.name} `;
    div.append(btn);
    container.append(div);
    div.style.padding = "10px";
  });
}
readData();
