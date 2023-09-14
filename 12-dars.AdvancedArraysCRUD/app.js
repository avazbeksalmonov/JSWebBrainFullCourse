// // Advanced Arrays CRUD execise
let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Tolipov" },
    { id: 3, year: 2002, name: "Najmiddin Nazarov" },
    { id: 4, year: 2002, name: "Mominov Abdulloh" },
    { id: 5, year: 1995, name: "Sardor Tursunboyev" },
    { id: 6, year: 2002, name: "Hudoyberdiyeva Mohichehra" },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shukurov Shohruh" },
];
// //CRUD
const addUser = (user) => {
    students = [...students, { id: students.length + 1, ...user }];
};
const sortByYear = () => {
    let res = students.sort((a, b) => b.year - a.year);
    students = res;
};
const sortByAlphabet = () => {
    let res = students.sort((a, b) => a.name.localeCompare(b.name));
    students = res;
};
const deleteUser = (id) => {
    let res = students.filter((value) => value.id !== id); // idsi 4ga teng bo'lgani chiqib ketadi
    students = res;
};
//Update
const updateUser = (data) => {
    let res = students.map((value) => {
        return value.id === data.id ? {...value, [data.key]: data.value } : value;
    });
    students = res;
};
updateUser({ id: 2, key: "name", value: "Avazbek" });
updateUser({ id: 2, key: "year", value: 1998 });
updateUser({ id: 2, key: "Job", value: "FrontEnd" });
// Update
deleteUser(4);
sortByAlphabet();
sortByYear();
addUser({ year: 2019, name: "webbrain" });

const getFilter = (key) => {
    let res = students.filter((value) => {
        return value.name.toLowerCase().includes(key.toLowerCase());
    });
    students = res;
};

const getFilterId = (key) => {
    let res = students.filter((value) => {
        return value.id === key;
    });
    students = res;
};

const getFilter = ({ key, value }) => {
    let res = students.filter((usr) => {
        return `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase());
    });
    students = res;
};

getFilter({ value: 3, key: "id" });
getFilter({ value: "Sardor", key: "name" });
getFilter("Asilbek");
getFilterId(3);
console.log(students);

let cars = [
    { id: 1, year: 2012, carName: "Nissan" },
    { id: 2, year: 2010, carName: "Audi" },
    { id: 3, year: 2015, carName: "Chevrolet" },
    { id: 4, year: 2009, carName: "BMW" },
];
const addUser = (user) => {
    cars = [...cars, { id: cars.length + 1, ...user }];
};
addUser({ year: 2000, carName: "Niva" });
addUser({ year: 2006, carName: "Bugatti" });
console.log(cars);