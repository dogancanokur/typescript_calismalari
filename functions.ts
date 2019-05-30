// klasik js kodu
function topla(x, y) {
    return x + y;
}

// ts uyumlu
function toplaTypeScript(x: number, y: number) {
    return x + y;
}

toplaTypeScript(3, 4);

let topla3 = function (x: number, y: number): number {
    return x + y;
}

console.log(toplaTypeScript(12, 6))

console.log(topla3(3, 4))

function topla4(x: number, y: number) {
    return x + y;
}

console.log(topla4(3, 5))

//default
function topla5(x: number, y: number = 4) {
    return x + y;
}
console.log(topla5(3))
console.log(topla5(3, 5))


// optional
function topla6(x: number, y?: number) {
    if (y) {
        return x + y;
    } else {
        return x;
    }
}

console.log(topla6(3))
console.log(topla6(3, 5))


function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
    // 1 kişiyi mutlaka davet edicez ama gerisi belli değil
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("doğancan","kübra","mihriban","ali","veli"))

