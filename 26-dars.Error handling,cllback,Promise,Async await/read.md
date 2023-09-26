<h3>1-dars.Variable.Data Types</h3>
<span>
<p>O’zgaruvchi(variable)-o’zida ma’lumot saqlovchi konteynerga o’zgaruvchi deyiladi.
JavaScriptda o’zgaruvchilar 3xil usulda e’lon qilinadi let,var,const
let-o’zgaruvchini qayta nomlash mumkin </p>

<p>let firstName = “John”;</p>
<p>firstName = “Doe’;</p>
<p>var-let bilan deyarli bir xil,let chiqishidan oldin ishlatilgan</p>
<p>var firstName = “John”;</p>
<p> lastName = “Doe”; bu holatda ham var ishlatilgan bo’ladi</p>
<p>const-o’zgaruvchini qayta nomlay olmaymiz.Boshqa qiymat berib bo’lmaydi</p>
   <p>const age = 18;</p>
         <p>age = 20;      xatolik beradi</p> 
<p>TypeError: Assignment to constant variable.</p>
<p>const-o’zgarmas</p>
<p>Ma’lumot turlari</p>
<b>JavaScriptda 8xil ma’lumot turlari bor
Ulardan 7tasi primitive, 1tasi non-primitive</b>
<b>Primitive </b>
<li>
1.Number 
2.String
3.Boolean
4.Bigint 
5.Null
6.Undefined
7.Symbols</li>  
<b>Non-primitive</b>
<p>Object-function,object,array</p>

Undefined-o’zgaruvchida ma’lumot yo’q bo’lganda uni ishlatmoqchi bo’lsak,undefined chiqadi<br>
let age;<br>
console.log(age); // undefined <br>

Null<br>
let nom = null;<br>
console.log(nom); // null<br>

let a;<br>
let b = null;<br>

console.log(typeof a, typeof b);<br>
//undefined , object<br>

console.log(a == b); // true<br>
console.log(null == undefined); // true<br>
console.log(null === undefined); //false<br>

console.log(null + 1); // 1<br>
console.log(undefined + 1); //NaN not a number<br>

Symbol-unic id yasab berish uchun ishlatiladi<br>
let t = Symbol("text");<br>
let a = Symbol("text");<br>

console.log(a == t); // fasle<br>
console.log(a === t); //true<br>
bir-biriga teng bo’lmayd,har-biri uchun alohida id ochiladi<br>

 </span>
