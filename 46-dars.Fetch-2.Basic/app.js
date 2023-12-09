const getData = () => {
  dataList.innerText = "Yuklanyapdi.....";
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((res) => {
      dataList.innerHTML = `<h1>All Data</h1>`;
      console.log(res);
      res.forEach((element) => {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.innerHTML = `<b>${element.id}</b> - <span>${element.name}</span> <button onclick="onSelect(${element.id})">Select</button>`;
        dataList.append(div);
      });
    });
};
// METHOD - GET,POST,PUT
// fetch("https://jsonplaceholder.typicode.com/api/v1/houses")
async function onSelect(id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      // methodni default holati GETga teng
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      body: JSON.stringify({
        email: "Avazbek",
        password: 123456,
      }),
    }
  );
  let data = await response.json();
  single.innerHTML = `<h1>Selected</h1><b>${data.name}</b> - <span>${data.phone}</span>`;
  console.log(data);
}
const login = () => {
  fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.authenticationToken) {
        login.innerText = "Welcome to Facebook";
      }
    });
};
