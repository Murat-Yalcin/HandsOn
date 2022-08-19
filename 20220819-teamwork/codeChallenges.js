/* let player = Math.ceil(Math.random()*2);
console.log("--- Game Starts ---");
while(true){
    if( Math.random() <= 0.1 ){
        console.log("Player #" + player + " hits and knocks out!");
        console.log("--- Game Over ---");
        break;
    }
    if( player === 1 ){
        console.log("Player #1 hits");
        player = 2;
    }
    else{
        console.log("Player #2 hits");
        player = 1;
    }  
} */

/* Boxing yarismasi oyunu:
2 Player birbirlerine sirayla vurmaya basliyor. İlk baslayani kura ile belirliyorlar. Biri yikilana kadar oyun devam ediyor. Her yumrugun diger oyuncuyu yikma ihtimali 10%. (oyun başladığında tek seferde de yıkabilir)

Output:

Fight!!!
Player #2 hits
Player #1 hits
Player #2 hits
...
Player #1 hits and knocks out!
Game over!!!  */

// console.log(Math.random())

let player; // declare
// let player = 5 // declare, assign(initialize)
// player = 5 // undeclared

/* if(Math.random() > .5) {
    player = 1
} else {
    player = 2
} */
/* Math.random() > .5 ? player = 1 : player = 2
while(player) {
    if(player === 1) {
        if(Math.random() <= .1) {
            console.log("Player #1 hits and knocks out!\nGame over!!!")
            break
        } else {
            console.log("Player #1 hits")
            player = 2;
        }   
    } else {
        if (Math.random() <= .1) {
            console.log("Player #2 hits and knocks out!\nGame over!!!")
            break
        } else {
            console.log("Player #2 hits")
            player = 1
        }
    }
} */

/* console.log("\"")
console.log('\'')
console.log("\merhaba")
console.log("\tmerhaba")
console.log("\"murat\"") */

/* const arr = [1,2,3,4,5,6,7,8,9] // iterable
console.log(arr.length)
console.log(arr[arr.length - 1]) */

// console.log(arr[5])

/* const str = "steve"
console.log(str.length)
console.log(str[str.length - 1]) */

// for(let i = 0; i <= arr.length - 1; i++ ) {
//     console.log(arr[i])
// }

/* const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr2[Math.floor(Math.random() * arr2.length)]);

let i = Math.random() * arr2.length;
i = Math.floor(i)
console.log(arr2[i])
 */










