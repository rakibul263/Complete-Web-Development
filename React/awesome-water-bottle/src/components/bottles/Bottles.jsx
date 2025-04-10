import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    const [cart, setCart] = useState([]);

    const handelAddToCart = (bottle) => {
        // console.log('bottle will be added to the cart', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);
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