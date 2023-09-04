<h1>String metodlari</h1>

<p>
console.log(str.toLowerCase()); // kichik harf
console.log(str.toUpperCase()); // katta harf
console.log(str.trim()); // bo'sh joylarni olib tashlaydi,bosi va oxiridan
console.log(str.includes("World")); // berilgan so'zni text ichidan qidiradi topilsa true,topilmasa false
console.log(str.indexOf("l")); // berilgan harfni qidiridi, topilsa indexini, topilmasa -1 chiqaradi
console.log(str.lastIndexOf("l")); // berilgan harfni oxiridan boshlab qidiradi,topilsa indexi,topilmasa -1
console.log(str.replace("Hello", "Hi")); // Berilgan so'zni almashtiradi Hello ni, Hi ga
console.log(str.split("")); // qismlarga ajratib array qilib beradi ["H","e","l"....]
console.log(str.split("l")); // l harfi bor joyni ajratib array qilib beradi ["He","", "o Wor", "d"]
console.log(str.slice(2, 4)); // 2dan boshlab 4gacha bo'lgan elementlarni qirqib oladi [2,4) 4 kirmaydi
console.log(str.substring(6, 10)); // 6dan 10gacha kesib oladi [6,10)
console.log(str.length); // uzunligini chiqaradi
console.log(str.charAt(1)); // birinchi elementini qirqib oladi
console.log(str.at(1)); // birinchi elementini qirqib oladi, at - minuslik ham qabul qiladi
console.log(str.startsWith("Hello")); // shu so'z bilan boshlanganmi, ha bo'lsa true, yo'q bo'lsa false qaytaradi
console.log(str.endsWith("Hello")); // shu so'z bilan tugaganmi, ha bo'lsa true, yo'q bo'lsa false qaytaradi
console.log(str.concat("JavaScript")); // qo'shib beradi so'zni //Hello WorldJavaScript
console.log(eval("2 + 2")); // Matematik hisob-kitob stringlar ustida
console.log(str.padEnd(22, ".")); // Hello World...........
console.log(str.padStart(22, ".")); // ...........Hello World
</p>