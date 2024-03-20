//localStorage - API
// - setItem(key,value),
// - getItem(key),
// - removeItem(key),
// - clear(),
// - key(index),
// - length,
// -Object.keys();

window.onload = () => {
  count.innerText = localStorage.getItem("count") || 1;
  title.innerText = localStorage.getItem("title") || "";
  inTitle.value = localStorage.getItem("title") || "";

  let roleID = localStorage.getItem("roleID");

  if (roleID === "admin") {
    user.innerText = "Admin";
  } else if (roleID === "Driver") {
    user.innerText = "Driver";
  }
};
save.onclick = () => {
  if (login.value === "webbrain" && pw.value == 12345) {
    user.innerText = "Admin";
    localStorage.setItem("roleID", "Admin");
  } else if (login.value === "driver" && pw.value == 12345) {
    user.innerText = "Driver";
    localStorage.setItem("roleID", "driver");
  }
};

const plus = () => {
  count.innerText = eval(`${count.innerText} + 1`);
  localStorage.setItem("count", count.innerText);
};
const minus = () => {
  count.innerText = eval(`${count.innerText} - 1`);
  localStorage.setItem("count", count.innerText);
};

const onChangeTitle = (event) => {
  // const {
  //   target: { value },
  // } = event;
  const value = event.target.value;
  title.innerText = value;
  localStorage.setItem("title", value);
};
// del
del.onclick = () => {
  localStorage.removeItem("count");
};
//clear
cl.onclick = () => {
  localStorage.clear();
};

console.log(localStorage);
console.log(Object.entries(localStorage));

for (let k of Object.entries(localStorage)) {
  console.log(k);
}
for (let k of Object.values(localStorage)) {
  console.log(k);
}
