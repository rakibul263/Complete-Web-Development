import React, { useEffect, useState } from 'react';
import { use } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoredCart } from '../utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);

    useEffect(()=>{
        const storedCardIds = getStoredCart();
        // console.log(storedCardIds, bottles);

        const storedCart = [];
        for(const id of storedCardIds){
            console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
    }, [bottles])
    const [cart, setCart] = useState([]);

    const handelAddToCart = (bottle) => {
        // console.log('bottle will be added to the cart', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

        //save the bottle id in the storage
        addToStoredCart(bottle.id);
    }
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added to cart : {cart.length}</p>
            <div className='container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} handelAddToCart={()=>handelAddToCart(bottle)} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;