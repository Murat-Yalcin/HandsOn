//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// Pseudocode:
//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)

// Cozum1:

// let lotery = 5;
// let number = Math.round(Math.random() * 100);
// while(lotery > 0){
//     let guess = +prompt(`Guess the number(0-100)! Number of tries left: ${lotery}`);
//     if(guess === number){
//         alert(`Congrulations! You won!`);
//         lotery = 0;
//         break;
//     }
//     else if(guess > number){
//         alert(`You're flying high!`);
//         lotery--;
//     }
//     else if(guess < number){
//         alert(`You're laying low!`);
//         lotery--;
//     }
//     if(lotery === 0){
//         alert("You lost!");
//     }
// }

// Cozum2:

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele)
do {

    const tahmin = +prompt("Lutfen Bir tahmin giriniz:")
    hak -= 1;
    if(tahmin === rastgele){
        console.log(`Tebrikler ${5-hak} kerede bildiniz`);
    }else if(tahmin < rastgele){
        console.log("Arttır");
    }else {
        console.log("Azalt");
    }
} while(hak > 0)
if (hak === -1) {
console.log("Uzgunuz oyunu kaybettiniz...");
}



// *** do-while yerine for ile de yapılabilir:

// for(hak; hak>0; hak--){

// }