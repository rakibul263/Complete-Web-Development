const products = [
    {id:1, name: "Apple", model:"Air M3", price: 1200000, chip: "M3"},
    {id:2, name: "HP", model:"Elite Book", price: 100000, chip: "AMD 5"},
    {id:3, name: "Acer", model:"Asrion 3", price: 40000, chip: "Intel core i5"},
    {id:4, name: "HP", model:"Daffodil Version", price: 23000, chip: "Core i3"},
]

const result = products.filter(product => product.name == "HP");
console.log(result);