const calculator = {
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

let result = calculator.add(5, 10); // 15

console.log(result); // 15