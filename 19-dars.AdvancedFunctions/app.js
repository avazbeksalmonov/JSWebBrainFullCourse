let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  clearInterval(timeout);
  console.log("Tugadi Interval");
});

let timeout = setInterval(() => {
  console.log("Timeout ishladi");
  alert("Interval ishlayapdi");
}, 3000);
