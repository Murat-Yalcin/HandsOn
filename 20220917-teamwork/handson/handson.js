console.log("ok");

const obj = {
  Ali: 85,
  veli: 100,
  salih: 99,
  ahmet: 98,
  akif: 70,
  okan: 85,
  tarik: 90,
  seher: 109,
  nilufer: 98,
};

// bu objedeki her property'nin name'lerinden a harfi ile başlayanları console'a yazdıran bir fonksiyon yazalım?

// 1. yontem

Object.keys(obj).map((key) => {
  if (!key.toLowerCase().startsWith("a")) delete obj[key];
});
console.log(obj);

//2. yontem

let newObj = {};

for (let key in obj) {
  if (key[0] == "a") {
    newObj[key] = obj[key];
  }
}
console.log(newObj);

//3. yontem

const obj2 = {};
Object.keys(obj).map((key) => {
  if (key[0].toLowerCase() === "a") obj2[key] = obj[key];
});
console.log(obj2);

//4. yontem

console.log(
  Object.entries(obj).filter(([name]) => name.toLowerCase().startsWith("a"))
);

// ****************

const arr = [
  { name: "Chicken", price: "$10", unit: "kilo" },
  { name: "Beef", price: "$20", unit: "kilo" },
  { name: "Sausage", price: "$15", unit: "kilo" },
  { name: "Salmon", price: "$25", unit: "kilo" },
];

//  bu array'i arr2 isminde başka bir array'e eşitlemek istiyorum ama arr2 arrayinde yaptığım değişiklikleiden arr arrayi etkilenmesin

// const arr2 = arr;
// arr2.push("chris");
// console.log(arr2);
// console.log(arr);

//1
// const arr2 = [...arr]
// arr2.push("chris")
// console.log(arr2);
// console.log(arr);
// const arr2 = arr.map(obj => ({...obj}))
// console.log(arr2 === arr);

//2
// const arr2 = JSON.parse(JSON.stringify({ ...arr }));
