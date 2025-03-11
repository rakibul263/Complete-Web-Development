const friends = ["Rakibul", "Israfil", "Toufik"];
const newArray = ["Hero Alom", ...friends];
console.log(...newArray);


const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 88, 4, 5];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

const [num1, num2, ...num] = numbers;

console.log(num1);
console.log(num)


const Object_01 = {
    'brand' : 'Audi',
    'speed' : 590,
    'price' : '5cr'
};

const Object_02 = {
    'name' : 'horu',
    'age' : 3,
    'price' : '10cr'
}

const update_Object = {...Object_01, ...Object_02};
console.log(update_Object);