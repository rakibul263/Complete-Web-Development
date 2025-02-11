const products = [
    {id:1, name:"Xiaomi", description:"This is xiaomi", price:500, color:"Black"},
    {id:2, name:"Iphone", description:"This is iphone", price:800, color:"Golden"},
    {id:3, name:"opppo", description:"This is opppo", price:700, color:"Mid Night"},
    {id:4, name:"Black Bary", description:"This is Black Bary", price:300, color:"gray"},
]

for (let i = 0; i < products.length; i++){
    // console.log(products[i]);
    const element = products[i];
    if(element.id == 3){
        console.log(element);
    }
}