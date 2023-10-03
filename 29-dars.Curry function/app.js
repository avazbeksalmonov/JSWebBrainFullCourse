//Curry function

function getData(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
// // const getData = (a) => (b) => (c) => a + b + c;
// // getData();
console.log(getData(1)(2)(3)); //6
// // console.log(getData(1, 2, 3));// undefined

// const check = (a, b, c) => {
//   console.log(a, b, c);
// };

// function getData(a) {
//   return (b) => {
//     return (c) => {
//       return check(a, b, c);
//     };
//   };
// }
// console.log(getData(1)(2)(3));
// boshqa bir funksiyaga return qilgan funksiya curry function

const operations = (type) => {
  return (a) => {
    return (b) => {
      return (c) => {
        switch (type) {
          case "add":
            return a + b + c;
            break;
          case "divide":
            return a / b / c;
            break;
          case "multiply":
            return a * b * c;
        }
      };
    };
  };
};

const math = operations("multiply");
console.log(math(10)(2)(3));
console.log(math(10)(20)(30));
