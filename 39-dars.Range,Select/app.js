//Range
// let data = document.querySelector("#data");
let data = document.querySelectorAll("h1");
let range = new Range();
// range.setStart(data.firstChild, 0);
// range.setEnd(data.firstChild, 5);

// range.setStart(data[0], 0);
// range.setEnd(data[1], 1);
// range.setStart(data[0].firstChild, 0);
// range.setEnd(data[1].firstChild, 1);

// range.setStart(data[0].firstChild, 0);
// range.setEnd(data[0].firstChild, 6);
window.getSelection().addRange(range);
/// --- deleteContents ----
// button.onclick = () => {
//   range.deleteContents();
// };
/// ---- extractContents -----
// button.onclick = () => {
//   let div = document.createElement("span");
//   div.innerHTML = "new value";
//   range.insertNode(div);
//   //   let selected = range.extractContents();
//   //   text.innerHTML += selected.textContent;
// };
// ----- surroundContents  -----
let div = document.createElement("i");
div.style.color = "red";
// button.onclick = () => {
//   range.surroundContents(div);
// };
let txt = data[0].innerText;
// console.log(txt);
// inp.oninput = (event) => {
//   data[0].innerText = txt;
//   range.setStart(data[0].firstChild, 0);
//   range.setEnd(data[0].firstChild, event.target.value.length);
//   range.surroundContents(div);
// };

let inp = document.getElementById("inp");

inp.addEventListener("input", (event) => {
  data[0].innerText = txt;
  range.setStart(data[0].firstChild, 0);
  range.setEnd(data[0].firstChild, event.target.value.length);
  range.surroundContents(div);
});

const selection = getSelection();
console.log(selection);

document.onselectionchange = (e) => {
  console.log(selection.getRangeAt(0).cloneContents());
  // select bo'lgan ma'lumotni chiqarib beradi
};
