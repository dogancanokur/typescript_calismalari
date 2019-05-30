function selamVer(isim) {
    return "merhaba " + isim;
}
var mesaj = selamVer("Doğan");
console.log(mesaj);
// temel primitive veri tipleri
var sayi;
sayi = 10;
sayi = 10.4;
var sehir;
sehir = "İstanbul";
sehir = "Ankara";
var dogruMu;
dogruMu = true;
// diziler
var sayilar = [1, 2, 3, 4];
var sayilar2 = [1, 2, 3];
// let sayilar3 : Array<Customer>
var dizi = [1, "İstanbul", 150000];
console.log(dizi[2]);
var Renkler;
(function (Renkler) {
    Renkler[Renkler["Kirmizi"] = 0] = "Kirmizi";
    Renkler[Renkler["Siyah"] = 1] = "Siyah";
    Renkler[Renkler["Mavi"] = 2] = "Mavi";
})(Renkler || (Renkler = {}));
var Renkler2;
(function (Renkler2) {
    Renkler2[Renkler2["Kirmizi"] = 1] = "Kirmizi";
    Renkler2[Renkler2["Siyah"] = 2] = "Siyah";
    Renkler2[Renkler2["Mavi"] = 3] = "Mavi";
})(Renkler2 || (Renkler2 = {}));
var renk;
var bisey = "Ankara";
bisey = 2;
bisey = {};
var tanimsiz; // böyle kullanılmaz
function selamVer2() {
    console.log("tekrar merhaba");
    // return 5; // olmaz çünkü void
}
var diger;
// undefined
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
