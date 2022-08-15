// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

// console.log("****** CONDITIONS *******");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = number(prompt("Bir sayi giriniz:"))
// if ( sayi > 0) {
//     console.log(`${sayi} pozitiftir.`);
// }else if (sayi == 0){
//     console.log(`${sayi} 0'a eşittir.`);
// }else {
//     console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const n1 = +prompt("Birinci sayiyi giriniz:")
const n2 = +prompt("ikinci sayiyi giriniz:")
const n3 = +prompt("Ucuncu sayiyi giriniz:")

if (n1 >= n2 && n1>= n3){
    console.log(`${n1} en buyuk sayidir`);
}else if (n2 >= n1 && n2>= n3){
console.log(`${n2} en buyuk sayidir`);
}else if (n3 >= n1 && n3>= n2){
    console.log(`${n3} en buyuk sayidir`);
}
