// // const age = 10;

// // localStorage.setItem('myage', age);

// const handelAddToStorage = () => {
//     // const name = "Rakibul Hasan";
//     // localStorage.setItem("myName", name);

//     const person = {
//         name : "Rakibul Hasan",
//         age : 24,
//         dept : "CSE"
//     }

//     const convertToString = JSON.stringify(person);
//     localStorage.setItem('Shuvo', convertToString)
// }

// const data = localStorage.getItem("shuvo");


/* const handleAddToCard = ()=>{
    const productName = document.getElementById('product-name');
    const productQuentity = document.getElementById('product-quantity')
    const name =productName.value;
    const quantity = productQuentity.value;

    handelSetToLocalStorage(name, quantity);
    displayProduct(name, quantity);

    productName.value = "";
    productQuentity.value = "";
}

const displayProduct = (productName, quantity) => {
    const productContainer  = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${quantity}`;

    productContainer.appendChild(li);
}

const getProductFromLocalStorage = () =>{
    let cart = {};
    const getProduct = localStorage.getItem('cart');

    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return;
}

const handelSetToLocalStorage = (productName, quantity) => {
    const cart = getProductFromLocalStorage();
    // console.log(cart);

    cart[productName] = quantity;

    const cartString = JSON.stringify(cart);

    localStorage.setItem("cart", cartString);
} */


document.getElementById('submitBtn').addEventListener('click', ()=>{
    const id = document.getElementById('idField').value;
    const email = document.getElementById('email').value;

    const data = {id, email};
    localStorage.setItem(id, JSON.stringify(data));
})

const storedItem = localStorage.getItem("121");
console.log(JSON.parse(storedItem));

const storageClear = () =>{
    localStorage.clear();
}