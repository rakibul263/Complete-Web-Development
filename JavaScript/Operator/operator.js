/* a+b
here, a and b is a operand and + is a operator. */


let a = 10;
let b = 5;
//Arithmetic Operator
console.log("Arithmetic Operator: ");
console.log(a+b); 
console.log(a-b);
console.log(a*b);
console.log(a/b); 

//Unary Operator
console.log("Unary Operator: ");
console.log(a++); //10
console.log(a); //11
console.log(++b); //6

//Assignment Operator
console.log("Assignment Operator: ");
let x = 10;
let y = 20;
x += y; // x = x + y
console.log(x); //30

//Comparison Operator
console.log("Comparison Operator: ");
//compare value not a type
console.log(a == b); //false
console.log(a != b); //true
console.log(a > b); //true
console.log(a < b); //false

//compare value and type
let c = 10;
let d = "10";
console.log(c === d); //false
console.log(c !== d); //true
console.log(0 === ' '); //true

//Comparison for non-number;
console.log("Comparison for non-number: ");
console.log('a' > 'b'); //false
console.log('a' < 'b'); //true
console.log('a' == 'b'); //false

//Logical Operator
console.log("Logical Operator: ");
let p = 10;
let q = 20;
let r = 30;
console.log(p < q && q < r); //true
console.log(p < q && q > r); //false
console.log(p < q || q > r); //true
console.log(p > q || q > r); //false
