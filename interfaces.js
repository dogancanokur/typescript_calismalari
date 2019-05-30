function save(product) {
    console.log(product.name + " kaydedildi");
}
save({ id: 1, name: "laptop", unitPrice: 12 });
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
var mouse = new Product2();
mouse.name = "A4Tech";
save(mouse);
var CustomerServise = /** @class */ (function () {
    function CustomerServise(parameters) {
    }
    CustomerServise.prototype.save = function () {
        throw new Error("Method not implemented.");
    };
    return CustomerServise;
}());
