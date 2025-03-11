// simple class constructor
class Car {
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod){
        super(name);
        this.model = mod;
    }

    show(){
        return this.present() + ' it is a '+ this.model;
    }
}

const forModel = new Model('Audi', '12DER');
const result = forModel.show();
console.log(result);



