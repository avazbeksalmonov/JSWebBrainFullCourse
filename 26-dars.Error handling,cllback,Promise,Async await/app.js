//*** Error handling,callback,Promise,Async await***//
// try,catch
try {
  console.log(number);
} catch {
  console.log("Error bor.Catch ishladi");
}
try {
  console.log(a);
} catch (error) {
  console.log(error.message); //a is not defined
}
// *** error message */
try {
  // JSON.parse(`{"name": "webbrain"}`);
  JSON.parse(`{name: "webbrain"}`);
} catch (error) {
  console.log(error.message); //Unexpected token n in JSON at position 1
}
// ***error name***
try {
  // JSON.parse(`{"name": "webbrain"}`);
  JSON.parse(`{name: "webbrain"}`);
} catch (error) {
  console.log(error.name); //SyntaxError
}
// *** new Error() */
try {
  throw new Error("smth wrong error"); // throw catchga o'tqizadi erroni
} catch (error) {
  console.log(error);
}
// /=======
try {
  throw new Error("Smth wrong error"); // throw catchga o'tqizadi erroni
} catch {
  console.log("Smth wrong error");
}

// **** ----- Callback ------ ****
function add(a, b, callback) {
  console.log(`${a} va ${b}larning yig'indisi ${a + b}ga teng`);
  callback();
}

function display() {
  console.log("Bu qator qo'shuvdan keyin chiqadi.");
}
add(3, 4, display);

function add(a, b, callback) {
  console.log(`${a} va ${b}larning yig'indisi ${a + b}ga teng`);
  callback();
}
add(3, 4, function display() {
  console.log("Bu qator qo'shuvdan keyin chiqadi.");
});
// ---------------- callback ---------------
var database = {
  najmiddin: {
    login: "najmiddin",
    password: 12345,
    fullname: "Najmiddin Najmiddinov",
  },
  sardorbek: {
    login: "sardorbek",
    password: 12345,
    fullname: "Sardorbek Muxtorov",
  },
};
console.log("Started...");
const login = (lg, pw, callback) => {
  setTimeout(() => {
    if (database.najmiddin.login === lg && database.najmiddin.password === pw) {
      return callback(`${database.najmiddin.fullname} Welcome to Facebook`);
    } else {
      return callback(`Qo'chqorvoy aka paroliz noto'g'ri`);
    }
  }, 1000);
};
login("najmiddin", 1234, (usr) => {
  console.log(usr);
  console.log("Finishid...");
});

const callback = (usr) => {
  console.log(usr);
  console.log("Finishid...");
};
login("najmiddin", 124, callback);
// ***** --- callbak hell --- *****
var database = {
  avazbek: {
    login: "avazbek",
    password: 12345,
    fullname: "Avazbek Salmonov",
  },
  sardorbek: {
    login: "sardorbek",
    password: 12345,
    fullname: "Sardorbek Muxtorov",
  },
};
console.log("Started...");
const login = (lg, pw, call) => {
  setTimeout(() => {
    if (database.avazbek.login === lg && database.avazbek.password === pw) {
      return call(`${database.avazbek.login}Welcome to Facebook`, () => {
        return `${database.avazbek.fullname}`;
      });
    } else return call(`Bg'atan paroliz noto'g'ri : )`);
  }, 1000);
};
login("avazbek", 12345, (user, getFullname) => {
  console.log(user);
  console.log(getFullname());
  console.log("Finishid...");
});
// ******** --- Promise --- ********

//syntax
// new Promise((resolve, reject) => {});
//-*-*-*-*
let database = {
  avazbek: {
    login: "avazbek",
    password: 12345,
    fullname: "Avazbek Salmonov",
  },
  sardorbek: {
    login: "sardorbek",
    password: 12345,
    fullname: "Sardorbek Muxtorov",
  },
};
console.log("Started...");
let user = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.avazbek.login === "avazbek" &&
      database.avazbek.password === 12345
    ) {
      resolve(`Welcome to Facebook`);
    } else {
      reject(`Bg'atan paroliz noto'g'ri : )`);
    }
  }, 1000);
});
user
  .then((res) => {
    console.log(res);
  })
  // .then(() => console.log("Finished..."))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished...");
  });

console.log("Request data....");
setTimeout(() => {
  console.log("Processing data....");

  const product = {
    name: "Car",
    color: "black",
  };
  setTimeout(() => {
    product.status = "order";
    console.log(product);
  }, 2000);
}, 2000);
console.log("Request data...");
const request = new Promise((resolve) => {
  setTimeout(() => {
    const product = {
      name: "car",
      color: "black",
    };
    resolve(product);
  }, 2000);
});
request
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        data.status = "ordered";
        console.log("Get date...");
        reject();
      }, 2000);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Something went wrong");
  })
  .finally(() => {
    console.log("Fetching end");
  });

//***---- all ---***
// Promise.all([]);

const request = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
request(1000).then(() => {
  console.log("Work request 1000ms");
});
request(2000).then(() => {
  console.log("Work request 1000ms");
});
request(3000).then(() => {
  console.log("Work request 1000ms");
});
// /** all */
const request = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
// request(1000).then(() => {
//   console.log("Request 1000ms");
// });
// request(2000).then(() => {
//   console.log("Request 2000ms");
// });

// request(3000).then(() => {
//   console.log("Request 3000ms");
// });
Promise.all([request(1000), request(2000), request(3000)]).then(() => {
  console.log("All");
});

Promise.all([request(1000)], [request(2000)], [request(3000)]).then(() => {
  console.log("All");
});
// * race * /
Promise.race([request(1000)], [request(2000)], [request(3000)]).then(() => {
  console.log("All");
});

// **----*** async await  **----***

console.log("Started...");
let user = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.avazbek.login === "avazbek" &&
      database.avazbek.password === 12345
    ) {
      resolve(`Welcome to Facebook`);
    } else {
      reject(`Bg'atan paroliz noto'g'ri : )`);
    }
  }, 1000);
});

async function get() {
  let res = await user;
  console.log(res);
  console.log("Finished....");
}
get();

const gett = async () => {};
user.then((res) => {
  console.log(res);
});
console.log("Finished....");
