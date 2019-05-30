class Ev {
    odaSayisi: number;
    pencereSayisi: number;
    kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
        console.log("Ev oluşturuldu.")
    }

    yemekYe() {
        console.log(this.kat + " katlı evde yemek yenildi.");
    }
    uyu(): string {
        return "Uyundu";
    }

}

let ev = new Ev(3, 4, 5);

ev.yemekYe();

console.log(ev.uyu());

class Kisi {
    kaydet() {
        console.log("kaydedildi.");
    }
}

class Personel extends Kisi {
    // kaydet() metodu var içinde çünkü Kisi classından miras aldık 
    maas() {
        console.log("maas ödendi");
    }
}

class Musteri extends Kisi {
    // kaydet() metodu var içinde çünkü Kisi classından miras aldık
    satinYap() { // müsteriye özeldir.
        console.log("satış yapıldı");
    }
}

let musteri = new Musteri();
let personel = new Personel();

personel.kaydet();
personel.maas();
musteri.kaydet();
musteri.satinYap();