// console.log('App js Running')

// var a = 5;
// console.log(a);

// {
//     let a = 3
//     console.log(a);
// }

// console.log(a);

// console.log(typeof 0)
// console.log(typeof 3.14)
// console.log(typeof 'Hello')
// console.log(typeof Symbol('hello'))
// console.log(typeof (8<10))
// console.log(8 < 10)
// console.log(typeof 1234567890123456789012345678901234567890n)

// prompt'tan girilen değer string olarak gelir. prompt'un başına + eklenirse değer rakama çevrilir.
// let b = +prompt('Bir girdi yapınız')

// console.log(b, typeof b)

// let m = 42
// console.log(typeof m)
// console.log(typeof typeof m)

// string olan sayı ifadesini
// başına + ekleyip number tipine
// parseInt(stringVar) ile integer number a
// parseFloat(stringVar) ile kesirli sayı

// let age

// console.log(age)

// console.log(myAge)

// var myAge = 40;

// console.log("hello")

// biz bir değişkene bilerek kasıtlı olarak yok değeri vermek istiyorsak "null" kullanabiliriz.
// değeri verilmemiş değişkenlere bilerek kasıtlı olarak "undefined" KULLNANMAYINIZ

// let a = null

// console.log(typeof a)


// NaN ve isNaN açıklaması: isNaN "eğer sayı değilse" koşulu

// let x;

// do {
//     x = prompt('enter a Number: ')
// }while (isNaN(x));

// console.log(x, x*x)

// 15 basamaktan daha uzun sayılarda doğruluk garantisi veremiyor. (Ondalık sayılarda virgülden sonraki 17 basamak)

// let x = 12345678901234
// let y = 123456789012341234
// let z = 0.12345678901234567
// let zz = 0.123456789012345675678

// console.log({x})
// console.log({y})

// console.log({z})
// console.log({zz})

// floating point math hatası: 0.1 + 0.2 sonucu hata veriyor. düzeltmek için '.toFixed(2)' kullanıyoruz (virgülden sonraki haneyi iki basamak ile kısıtlıyor). çıkan değer string olacağı için + ile number yapıyoruz

// let g = 0.1 + 0.2
// console.log(+g.toFixed(2))

// büyük rakamların rahat okunabilmesi için _ kullanılır

// let m = 1_000_000_000
// console.log(m)

// string için ",', ` kullanılır. dış tırnak ve iç tırnaklar farklı kullanılması gerekir. aynısı kullanılacaksa \ kullanılır. (escape character)

let text = "He said, \"I am a new programmer\" then went out"
console.log(text)

let i = 'This \'is\' a string';
let j = "This is a string"
let k = `This is a string`

console.log(i, typeof i)
console.log(j, typeof j)
console.log(k, typeof k)

// Dolarlı değişken'in ($degisken) çalışması için ` kullanmalıyız
let userName = 'Musa'
console.log(userName.length)

console.log('Merhaba', userName)
console.log(`Merhaba ${userName}`)

console.log(`2+3 = ${2+3}`)

// legth property iken concat method'dur

console.log(userName.concat('musa'))

// == eşit midir? anlamını taşıyor
let x = 8 > 5;
let y = 42 == 35; 
console.log(`x = ${x}`)
console.log(`y = ${y}`)

// Boolean("Hello World");
// Boolean(5);
// Boolean(-5);
// Boolean("false");
// Boolean('0');
// Boolean(3.14 + 8);   //All of these values return true
// Boolean("");
// Boolean(0);
// Boolean(-0);
// Boolean(null);
// let x;
// Boolean(x);   //All of these values return false

// Boolean (3 > 2);     //return true
// Boolean (2 < 3);     //return true
// Boolean (2 > 3);     //return false 
// Boolean (2 == 3);    //return false

let n = ``

let o = ' '

let p = 0

console.log(Boolean(n))
console.log(Boolean(o))
console.log(Boolean(p))
console.log(Boolean(3 > 5))
console.log(Boolean(3 > 2))
