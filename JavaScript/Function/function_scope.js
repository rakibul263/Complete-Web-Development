let result = 43; //global scope
function sum(a, b){
    let result = a+b;
    console.log(result);
}

sum(5, 10); // 15
// console.log(result); // ReferenceError: result is not defined

// The variable result is defined inside the function sum. So, it is not accessible outside the function.