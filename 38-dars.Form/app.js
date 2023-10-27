//Form Elements
// console.log(document.forms); // HTML Collection
// console.log(document.forms.bunkerForm);

// console.log(document.forms.bunkerForm);

//let form = document.forms.bunkerForm;
// console.log(form.elements.login);
// console.log(form.elements[0]);

// console.log(form.elements.login.value); // hey
//console.log(form);
//console.log(form.login); //formni ichidagi loginni olib keladi

//SELECT
let form = document.forms.bunkerForm;

// console.log(form.select);

// console.log(form.select.options[2]);

// console.log((select.value = "Ru")); // Russionga o'zgaradi
// console.log((select.selectedIndex = 2)); // Englishga o'zgaradi

// login.onblur = (event) => {
//   console.log("test", event.target.value);
//   if (!event.target.value.includes("@")) {
//     // loginError.innerHTML = null;
//     loginError.innerHTML = "hey";
//     loginError.style.color = "red";
//   } else {
//     // loginError.innerHTML = "hey";
//     // loginError.style.color = "red";
//     loginError.innerHTML = null;
//   }
// };
// login.onkeypress = (event) => {
//   loginError.innerHTML = null;
// };
// login.onfocus = (event) => {
//   loginError.innerHTML = null;
// };

// submit - form

// console.log(form.submit);
// console.log(form.action); // linkni chiqarib beradi

console.log(form.action);
form.onsubmit = (event) => {
  form.action = `https://jsonplaceholder.typicode.com/todos/${form.select.value}`;
  //   event.preventDefault();
  form.method = "GET";
  //   form.method = "PUT";
  console.log(form.select.value);
};
