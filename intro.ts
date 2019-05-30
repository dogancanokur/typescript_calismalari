function selamVer(isim: string) {
    return "merhaba " + isim
}

let mesaj = selamVer("Doğan")

console.log(mesaj)

// temel primitive veri tipleri
let sayi: number
sayi = 10
sayi = 10.4


let sehir: string
sehir = "İstanbul"
sehir = "Ankara"

let dogruMu: boolean
dogruMu = true

// diziler
let sayilar: number[] = [1, 2, 3, 4]

let sayilar2: Array<number> = [1, 2, 3]

// let sayilar3 : Array<Customer>

let dizi: [number, string, number] = [1, "İstanbul", 150000]
console.log(dizi[2])

enum Renkler {
    Kirmizi,
    Siyah,
    Mavi
}

enum Renkler2 {
    Kirmizi = 1,
    Siyah = 2,
    Mavi = 3
}
let renk: Renkler.Kirmizi


let bisey: any = "Ankara"
bisey = 2
bisey = {}


let tanimsiz: void // böyle kullanılmaz
function selamVer2(): void {
    console.log("tekrar merhaba")
    // return 5; // olmaz çünkü void
}


let diger: number
// undefined

class Musteri {
    // newleyip bir referansı oluşturmadığımız zaman null oluyor
}


