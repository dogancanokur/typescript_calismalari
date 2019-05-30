var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
        console.log("Ev oluşturuldu.");
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " katlı evde yemek yenildi.");
    };
    Ev.prototype.uyu = function () {
        return "Uyundu";
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.uyu());
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("kaydedildi.");
    };
    return Kisi;
}());
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // kaydet() metodu var içinde çünkü Kisi classından miras aldık 
    Personel.prototype.maas = function () {
        console.log("maas ödendi");
    };
    return Personel;
}(Kisi));
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // kaydet() metodu var içinde çünkü Kisi classından miras aldık
    Musteri.prototype.satinYap = function () {
        console.log("satış yapıldı");
    };
    return Musteri;
}(Kisi));
var musteri = new Musteri();
var personel = new Personel();
personel.kaydet();
personel.maas();
musteri.kaydet();
musteri.satinYap();
