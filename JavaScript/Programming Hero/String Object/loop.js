const computer = {
    brand : "Apple",
    chip : "M3",
    price : 77000,
    made : "UK"
}

for(const prof in computer){
    console.log(computer[prof]);
}

console.log(Object.values(computer));

const value = Object.values(computer);

for(const prof of value){
    console.log(prof);
}