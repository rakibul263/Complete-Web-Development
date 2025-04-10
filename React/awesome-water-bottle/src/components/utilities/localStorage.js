const getCardFromLocalStorage = () => {
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        const storedCart = JSON.parse(storedCardString);
        return storedCart;
    }else{
        return [];
    }
}

const saveCardToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const addItemToCardLocalStorage = (id) => {
    const cart = getCardFromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];

    saveCardToLocalStorage(newCart)
}

export {getCardFromLocalStorage as getStoredCart, addItemToCardLocalStorage as addToStoredCart}