function deger(x: number) {
    return x;
}

function deger2(x: string): string {
    return x;
}
let sayi = deger(10);

console.log(sayi);

let sehir = deger2("İstanbul");

console.log(sehir);

function deger3<T>(x: T): T {
    return x;
}

let sayi3 = deger3<number>(2)

console.log(sayi3);