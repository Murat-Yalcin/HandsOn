// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

const sayi = number(prompt("Bir sayi giriniz:"))
if ( sayi > 0) {
    console.log(`${sayi} pozitiftir.`);
}else if (sayi == 0){
    console.log(`${sayi} 0'a eşittir.`);
}else {
    console.log(`${sayi} negatiftir.`);
}
console.log(sayi, typeof sayi);