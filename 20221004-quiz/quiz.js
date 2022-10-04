// console.log(1 && 3);
// console.log(1 && 0);
// console.log([] && 1);

// console.log(0 || false);
// console.log(0 || true);
// console.log(1 || true);

//if/else - ternary
// kullanıcıdan yaş değeri alan ve yaş >= 18 ise "You are ... years old and eligible to vote.", aksi halde "You are ... years old and not eligible to vote." uyarısı veren kodu if/else ve ternary kullanarak yazınız
// const age = Number(prompt("Enter your age:"));
// if (age >= 18) {
//   console.log(`You are ${age} years old and eligible to vote.`);
// } else  {
//   console.log(`You are ${age} years old and not eligible to vote.`);
// }

// const age = Number(prompt("Enter your age:"));
// age >= 18 ? console.log(`You are ${age} years old and eligible to vote.`) : console.log(`You are ${age} years old and not eligible to vote.`);

//functions
// kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

// function ageCalc (name, birth) {
//   let age = new Date().getFullYear() - birth
//   console.log(`Hello ${name}, you're ${age} years old.`);
// }

// ageCalc("John", 1985);

// const ageCalc = (name, birth) => {
//   let age = new Date().getFullYear() - birth;
//   console.log(`Hello ${name}, you're ${age} years old.`);
// }
// ageCalc("John", 1985);

//Array iterators
//  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
//  const isimler = [
//   'Ahmet',
//   'mehmet',
//   'ismet',
//   'SAFFET',
//   'Can',
//   'Canan',
//   'Cavidan',
// ];

// let isimlerKucuk = isimler.map((person) => {
//    return person.toLowerCase()});
// console.log(isimlerKucuk);

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
// const fiyatlar = [100, 250, 50, 89];

// let lessThan250 = fiyatlar.filter((price) => price < 250 );
// console.log(lessThan250);

//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
// const kisiler = [
//   {
//     name: 'Ahmet',
//     surname: 'Can',
//     job: 'developer',
//     age: 30,
//   },
//   {
//     name: 'Mehmet',
//     surname: 'Baki',
//     job: 'tester',
//     age: 35,
//   },
//   {
//     name: 'Nur',
//     surname: 'Ersan',
//     job: 'team lead',
//     age: 40,
//   },
//   {
//     name: 'Merve',
//     surname: 'Veli',
//     job: 'developer',
//     age: 26,
//   }
// ];

// let younger = kisiler.filter((person) =>
//   person.age < 33 ).map((person) => person.name);
// console.log(younger);

// Objects
// calisan objesinde … değerlerini consola yazdırınız
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };

// console.log(calisan.diller[2])

// Spread
// araclar ve otomobiller dizilerini başka bir dizide birleştiriniz
// const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
// const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];

// const vehicles = [...araclar, ...otomobiller];
// console.log(vehicles)

// calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// const calisan = {
//   ad: 'Ahmet',
//   "soy-ad": 'Yilmaz',
//   yas: 30,
//   is: 'developer',
//   lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
//   diller: ['C', 'C++', 'Pyhton', 'JS'],
//   maas: 120000,
// };

// const newCalisan = {...calisan, yas:33}
// console.log(newCalisan)

//Destructuring
// car objesinden bra{nd, model,name,surname propertilerini destruct ediniz
// const car = {
//     brand: 'BMW',
//     model: 1990,
//     engine: 1.6,
//     owner:{
//       name: 'Ahmet',
//       surname: 'Can',
//   },
// };

// const {brand, model, engine, owner:{name,surname}} = car
// console.log(brand, model, engine, name, surname)

// Data fetching
// aşağıdaki url'den data çekerek first name değerini console'da gösteriniz

let url = "https://randomuser.me/api/";
fetch(url).then((name) => console.log(name));
