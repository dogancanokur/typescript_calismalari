abstract class KrediBase {
    constructor() {

    }

    kaydet(): void {
        console.log("Kaydedildi");
    }

    abstract hesapla(): void;
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {

        console.log("tüketici kredisi");
    }

}

class MortgageKredi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {

        console.log("Konut kredisi.");
    }

}

let tuketici = new TuketiciKredi();

let konut = new MortgageKredi();

tuketici.hesapla();
tuketici.kaydet();

konut.hesapla();
konut.kaydet();

let kredi : KrediBase

kredi = new TuketiciKredi();
kredi = new MortgageKredi();