//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");


const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

console.log(arabalar.lpg);
console.log("MODEL:", arabalar["model"]);

const key = "motor";
console.log(arabalar[key]);

function Personel(id, ad, maas) {
    this.perId = id;
    this.perAd = ad;
    this.maas = maas;
    // console.log(this);
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("1277567898", "Canan", 25000);
// console.log(kisi1);
console.log(kisi1.perAd);
console.log(kisi2.maas);
console.log(kisi2["perId"]);