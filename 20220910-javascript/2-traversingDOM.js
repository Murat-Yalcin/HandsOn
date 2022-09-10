console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------

const list = document.querySelector(".list");
const ul = list.parentNode;
ul.style.border = "2px solid red";

console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode);

console.log(list.parentElement);

console.log(list.closest("section"));

const itemListSec = list.closest("section");
itemListSec.style.background = "grey";
