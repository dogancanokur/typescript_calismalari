class GenericClass<T>{ // classı generic yaptık
    degisken: T;
    fonksiyon(parametre: T): T {
        return parametre;
    }
}

let sinif = new GenericClass<number>();

sinif.fonksiyon(15);