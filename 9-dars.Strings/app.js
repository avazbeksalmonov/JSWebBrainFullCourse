// let str1 = "web\n 'brain'"; //yangi qatorga o'tqizib beradi
// let str1 =
//     "web \
//  'brain'";
// let str1 = "webbrain";
// let str2 = ' . web"brain"';
// let str3 = `3web${str1}\tbrain`;
// let str4 = str1 + str2;
// console.log(str4, str3);

// let str1 = "webbrain";
// let str2 = new String("webbrain");

// console.log(str1 === "webbrain"); //true
// console.log(str2 === "webbrain"); //false chiqadi.Chunki constructor object qaytaradi
// console.log(str2.localeCompare(str1)); //true, 0 chiqadi str2 bn str1 taqqoslanyapdi
// console.log(str1.localeCompare(str2)); // 1

// let str1 = "webbrain";
// // str[1] = "i"; xatolik
// console.log(str1[1]); //e
// console.log(str1[-1]); // undefined
// console.log(str1.charAt(1)); // e
// console.log(str1.at(1)); // e
// console.log(str1.at(-1)); // n ,orqadan boshlab oladi
// at() bn charAt()ni farqi at -minuslik olaid,charAt olmaydi

// let str = "webbrain";

// console.log(str.length); // 8
// console.log(str.toLowerCase()); // kichkina harf
// console.log(str.toUpperCase()); // katta harf

// let str = 23456;
// // console.log(str.toUpperCase()); // xatolik beradi,number bo'lgani
// // uni oldini olish uchun ``dan foydalanamiz
// console.log(`${str}`.toUpperCase());
// console.log(`${str}`.toLocalUpperCase('en-US'));

// let str = "webbrain acadbbemy";
// console.log(str.indexOf("web")); //0
// console.log(str.indexOf("bb")); //2
// console.log(str.indexOf("tt")); //-1

//console.log(str.indexOf("bb", 5)); // -1 //nechinchi indexdan qarab qidirishni aytadi
// console.log(str.lastIndexOf("bb")); //2

// console.log(str.indexOf("bb")); // 2
// console.log(str.lastIndexOf("bb")); // 13
// console.log(str.lastIndexOf("bb", 6)); // 2 //oxiridan boshlab

//let str = "webbrain acadbbemy";
// console.log(str.includes("in")); // true, string ichida bor yo'qligini tekshirib beradi
// console.log(str.includes("tt")); // false

// console.log(str.startsWith("in")); // false // shu so'z in bilan boshlanganmi-?
// console.log(str.startsWith("web")); //true

// console.log(str.endsWith("emy")); //true // shu so'z emy bilan tugaganmi-?
// console.log(str.endsWith("aa")); // false

// console.log(str.padEnd(22, ".")); // webbrain academy...
// console.log(str.padStart(22, ".")); // ...webbrain academy

// console.log(str.slice(0, 5)); // webbr 5indexgacha qirqib oladi
// console.log(str.slice(0, -2)); // webbrain acadbbemy
// console.log(str.substring(0, 5)); // webbr
// console.log(str.substring(0, -2)); // malumot chiqarmaydi

//console.log(str.substring(2, 0)); // we //avtomatik tarzda to'girlab oladi 0 , 2
// qilib va -lik qiymat qabul qilmaydi
//console.log(str.substr(0, -2)); // my

// console.log(eval(`2+2`)); // 4
// console.log(eval("a3+3")); // error
//let str = "  webbrain acadbbemy  ";
// console.log(str);
// console.log(str.trim()); // bo'sh joylarni olib tashlaydi,boshi va oxiridan
// console.log(str.split()); // ma'limotlarni arrayga o'tqizadi
// console.log(str.split("")); // har bir harfni alohida string qilib beraadi
// console.log(str.split(" ")); // bo'sh joydan aloihida massiv qilib beradi
// console.log(str.split("a")); // ani oldidan ajratib beradi

// console.log(str.concat("webbrain")); // str+ webbrain qo'shib beradi

// console.log(new String("webbrain")); // [String: "webbrain"]
// console.log(new String("webbrain").valueOf()); // webbrain , ma'lumot oladi
// let str = "web brain acad web emy";
// console.log(str.replace("web", "WEB"));
// console.log(str.replace(/Web/i, "WEB")); // so'z mos kelishi kerak
// // webdan ikkita bo'lsa birinchisini qabul qiladi
// console.log(str.replace(/Web/gi, "WEB")); // hammasini o'zgartirib beradi

let str = "web brain acad web emy";

console.log(str.split("", 3)); // 3tasini kesib oladi
// ['web','brain','acad']

// for (char of str) {
//     console.log(char);
// }