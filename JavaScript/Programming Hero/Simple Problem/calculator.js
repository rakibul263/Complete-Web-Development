function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(num1, num2){
    return number1 * number2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation == 'add'){
        const result = add(a, b);
        return result;
    }else if(operation == 'subtract'){
        const result = subtract(a, b);
        return result;
    }else if(operation == 'multiply'){
        return multiply(a, b);
    }else if(operation == 'divide'){
        return divide(a, b);
    }else{
        return 'Operation is not allowed.';
    }
}

const result = calculator(5,7, 'add');
console.log('Result is : ', result);