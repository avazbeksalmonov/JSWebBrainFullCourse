// fetch("./text.txt")
//   .then((res) => {
//     return res.text();
//     //  return res.json()
//     // return res.blob()
//   })
//   .then((res) => {
//     console.log(res);
//   });

/// *** - formData - ****
// formEvent.onsubmit = (e) => {
//   e.preventDefault();
//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     // headers: {
//     //   "Content-Type": "application/json",
//     // },
//     body: new FormData(formEvent),
//     // body: JSON.stringify({
//     //   email: email.value,
//     //   password: password.value,
//     // }),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// };

formEvent.onsubmit = (e) => {
  e.preventDefault();

  // let body = new FormData(formEvent);

  // let imgUrl = URL.createObjectURL(file.files[0]);
  // console.log(imgUrl);
  // body.append("userImg", file.files[0]);
  // body.append("roleIdSet", "1");

  // body.delete("password");
  //  body.has("password");

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return (token = res.authenticationToken);
    });
};
var token = null;
const getSingle = () => {
  fetch("https://houzing-app.herokuapp.com/api/v1/categories/1", {
    headers: {
      Authorization: `Bearer${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.data.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<h1>${element.name}- ${element.id} - <button onclick="getSingle()">Select</button></h1>`;
        category.append(div);
      });
    });
};

const getCategory = () => {
  fetch("https://houzing-app.herokuapp.com/api/v1/categories/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.data.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<h1>${element.name}- ${element.id} - <button>Select</button></h1>`;
        category.append(div);
      });
    });
};
