// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");


// for ( let i = 0; i <=100 ; i += 3) console.log(i);

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

/* const n = Number(prompt('Bir sayi giriniz:'))

let toplam = 0 */
/* for ( let i = 1; i<=n; i *= 2){
    toplam = toplam + i;
    console.log(toplam, i);
} */
/* for ( let i = 1; i<=n; i++){
    toplam = toplam + i;
    console.log(toplam, i);
}

console.log("Sonuc:", toplam); */

//? Ornek: 0-100 Arasinda 10 adet rasgele sayi ureten kodu
//? for dongusu ile yaziniz..

// for (let i=1; i <= 10; i++) {
//     const rasgele = Math.round(Math.random() * 100)
//     console.log(rasgele);

// }

//* NOT:
//* Math.floor() => en yakın alt tamsayıya (taban) yuvarlar
//* Math.ceil() => en yakın üst tamsayıya (tavan) yuvarlar
//* Math.round() => 0.5 sınır kabul ederek en yakın tamsayı degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const sayi = Number(prompt("Pozitif bir sayi giriniz:"))
// // bu yönteme bayrak yöntemi deniyor. bayrak 1'e kuruldu. kodun devamında gerektiğinde 0'a kurulacak
// let asal = true; 
// if (sayi <= 1) {
//     alert("Sayi 1'den buyuk olmalidir")
// } else {
//     for (let i=2; i<sayi; i++){
//        if (sayi % i === 0){
//             asal = false
//             break;
//        }
       
//     }
//     const sonuc = asal === true ? "Asaldir" : "Asal degildir;"
//     console.log(`${sayi} ${sonuc}`);
// }


/* ya da üç eşit kullanmadan asal değişkeninin true varsayılması özelliğini kullanarak:
const sonuc = asal ? "Asaldir" : "Asal degildir" */

