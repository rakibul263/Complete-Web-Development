
const loadAllProduct = () =>{
    fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=>{
                displayProduct(data);
            });
};

const displayProduct = (products) =>{
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
        div.classList.add("cart");
        
        div.innerHTML = `
            <img class="cart-img" src=${product.image} alt=""/>
            <h5>${product.title.slice(0, 50)}</h5>
            <h3>${product.price}</h3>
            <p>${product.description.slice(0,50)}</p>
            <button>Details</button>
            <button onclick="hendelAddToCart('${product.
                title?.slice(0,12)}', '${product?.price}')">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
};

let count = 0;
const hendelAddToCart=(name,price)=>{
    const cartCount = document.getElementById("count").innerText;
    let convertedCount = parseInt(cartCount);
    console.log(convertedCount);

    convertedCount=convertedCount+1;
    document.getElementById("count").innerText=convertedCount;
    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
        <p>${name}</p>
        <h3 class="price">${price}</h3>
    `;
    container.appendChild(div);
    updateTotal();
};


const updateTotal = () => {
    const allPrices = document.getElementsByClassName("price");
    let count = 0;
    for(const element of allPrices){
        count=count+parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count;
}


loadAllProduct();