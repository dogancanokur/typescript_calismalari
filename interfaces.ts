interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    console.log(product.name + " kaydedildi");
}

save({ id: 1, name: "laptop", unitPrice: 12 });

class Product2{
    id: number;
    name: string;
    unitPrice : number;
}

let mouse = new Product2();
mouse.name ="A4Tech";
save(mouse);

interface PersonService{
    save();

}
class CustomerServise implements PersonService{
    save() {
        throw new Error("Method not implemented.");
    }
    constructor(parameters) {
        
    }
}