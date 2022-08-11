console.log('App.js is running.')

// iki sayı istenecek, çarpma ve bölme sonuçları gösterilecek

// let a = +prompt('birinci sayıyı girin')
// let b = +prompt('ikinci sayıyı girin')
// let result1 = a * b
// let result2 = a / b
// alert('sayıların çarpımı:' + result1 + ' sayıların bölümü:' + result2)

// hocanın cevabı:

// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// console.log(`${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`);

// dikdörtgenin kenar bilgilerini al, alanı hesapla

// let a = +prompt('Dikdörtgenin uzun kenarını girin')
// let b = +prompt('Dikdörtgenin kısa kenarını girin')
// let result1 = a * b

// alert('Dikdörtgenin alanı:' + result1)


// çemberin yarıçapını al, çevre ve alanını hesapla

// let a = +prompt('Yarıçap bilgisini girin')
// let result1 = (a**a) * Math.PI
// alert('Dairenin alanı:' + result1)

// bir cevap:
// let radius = +prompt("Enter radius :")

// console.log(`Area of circle is ${Math.PI * (radius**radius)}`);
// console.log(`Perimeter of circle is ${2 * Math.PI * radius}`);

// kullanıcıdan sayı alın, convert celsius to fahrenheit & fahrenheit to celsius

// let a = prompt(` enter temperature °C :`)
// fahrenait = (((9 * a) + ( 32 *5)) / 5)
// console.log( `${a} °C  ${fahrenait} is °F`)

// const today = new Date()
// console.log(today)
// console.log(today.getFullYear())

// const now = new Date();

// console.log(`Day of the month is ${now.getDate()}`);
// console.log(`Month is ${now.getMonth() + 1}`);
// console.log(`Year is ${now.getFullYear()}`);

// let a = +prompt('enter first number');
// let b = +prompt('enter second number');
// let c = +prompt('enter third number');
// let d = (a%10 == b%10) || (a%10 == c%10) || (b%10 == c%10);
// alert(d);



// There are at least 2 numbers having same first digit: true/false

// bir cevap

let a = prompt(`Enter the first number: `);
let b = prompt(`Enter the second number: `);
let c = prompt(`Enter the third number: `);

const p = (a % 10)
const q = (b % 10)
const r = (c % 10)



const d = ((p == q) || (q == r) || (p == r) )
console.log(`There are at least 2 numbers having same first digits: ${d}`);