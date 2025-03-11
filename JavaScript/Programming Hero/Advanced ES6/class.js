class product {
    constructor(name, brand, price){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    details (){
        console.log(`ami akta ${this.name} kinechi. jta ${this.brand} brand er and atar price hosse ${this.price}`);
    }
}

const Xiaomi = new product('xiaomi node 10S', 'xiaomi', 120000);
Xiaomi.details();

const Apple = new product('Iphone 16 pro max', 'Apple', 145464);
Apple.details();

