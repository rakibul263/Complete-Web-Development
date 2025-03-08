function sum(num1, num2){
    const result = num1 + num2;
    return result;
}

console.log(sum(10, 20));


const sum2 = function(num1, num2){
    const result = num1 + num2;
    return result;
}

console.log(sum2(4,5));

//arrow function

const arrowSum = (num1, num2) => num1 + num2;
console.log(arrowSum(20, 30));


const squre = (num) => num*num;
console.log(squre(10));