<h3>1-dars.Variable.Data Types</h3>
<span>
O’zgaruvchi(variable)-o’zida ma’lumot saqlovchi konteynerga o’zgaruvchi deyiladi.
JavaScriptda o’zgaruvchilar 3xil usulda e’lon qilinadi let,var,const
let-o’zgaruvchini qayta nomlash mumkin
              let firstName = “John”;
                    firstName = “Doe’;
var-let bilan deyarli bir xil,let chiqishidan oldin ishlatilgan
           var firstName = “John”;
            lastName = “Doe”; bu holatda ham var ishlatilgan bo’ladi
const-o’zgaruvchini qayta nomlay olmaymiz.Boshqa qiymat berib bo’lmaydi
   const age = 18;
              age = 20;      xatolik beradi 
TypeError: Assignment to constant variable.
     
const-o’zgarmas
Ma’lumot turlari
JavaScriptda 8xil ma’lumot turlari bor
Ulardan 7tasi primitive, 1tasi non-primitive
Primitive 
1.Number 
2.String
3.Boolean
4.Bigint 
5.Null
6.Undefined
7.Symbols  
Non-primitive
Object-function,object,array
Undefined-o’zgaruvchida ma’lumot yo’q bo’lganda uni ishlatmoqchi bo’lsak,undefined chiqadi
let age;
console.log(age); // undefined
                       
Null
let nom = null;
console.log(nom); // null

let a;
let b = null;

console.log(typeof a, typeof b);
//undefined , object

console.log(a == b); // true
console.log(null == undefined); // true
console.log(null === undefined); //false

console.log(null + 1); // 1
console.log(undefined + 1); //NaN not a number

Symbol-unic id yasab berish uchun ishlatiladi
let t = Symbol("text");
let a = Symbol("text");

console.log(a == t); // fasle
console.log(a === t); //true
bir-biriga teng bo’lmayd,har-biri uchun alohida id ochiladi

 </span>
