const person = {
    name : "hena",
    age : 10,
    country : "BD"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//add properties
person.status = 'Not Found';
console.log(person);


//seal properties
Object.seal(person);
person.monther = "Suraiya Begum";
console.log(person);

person.age = 23;

console.log(person);

Object.freeze(person);
person.age = 40;
console.log(person);