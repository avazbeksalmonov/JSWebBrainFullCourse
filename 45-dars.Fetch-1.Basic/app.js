// FETCH API
// url,link,silka,endpoint
//method -> GET,PUT / PATCH ,DELETE,POST

//then,promise,try,catch, async await

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => {
    return res.json(); // returndan qaytgan qiymat chiqadi
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res, "second");
  })
  .catch((error) => {
    console.log(error, "error");
  });

let response = fetch("https://jsonplaceholder.typicode.com/users/");
response
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

const getData = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/");
  let data = await res.json();
  console.log(data);
};

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

async function onSelect(id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  let data = await response.json();
  single.innerHTML = `<h1>Selected</h1><b>${data.name}</b> - <span>${data.phone}</span>`;
  console.log(data);
}
