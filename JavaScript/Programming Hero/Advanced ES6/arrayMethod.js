const products = [
    {id: 1, name:"Iphone", color:"Black", Price:1200, brand:"Apple"},
    {id: 2, name:"Xiaomi", color:"Gold", Price:100, brand:"Xiaomi"},
    {id: 3, name:"Samsung", color:"Gold", Price:120, brand:"Sam"},
    {id: 4, name:"Iphone", color:"Kala", Price:1000, brand:"Apple"},
    {id: 2, name:"Xiaomi", color:"Black", Price:110, brand:"Xiaomi"},
];


// products.forEach(element => console.log(element));

// const SpecificProduct = products.filter(element => element.Price >= 1000);
// console.log(SpecificProduct);

const findProduct = products.find(element => element.id === 4);
console.log(findProduct);