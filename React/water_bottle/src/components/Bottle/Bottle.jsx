import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handelAddToCart}) => {
    const {name, img, price, stock} = bottle;
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Available : {stock} remain</p>
            <button onClick={() => handelAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;