/* const vehicles = ['toyota', 'marchetise', 'audi'];

const [car1, car2, car3] = vehicles;

console.log(car1);
console.log(car2);
console.log(car3); */

function calculate(a, b){
    const sum = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;

    return [sum, sub, mul, div];
}
const [sum, sub, mul, div]  = calculate(15, 3);
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);