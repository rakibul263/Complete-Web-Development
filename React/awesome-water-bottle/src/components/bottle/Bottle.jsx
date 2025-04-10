import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handelAddToCart}) => {
    // console.log(bottle)
    const {img,name, price, stock} = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : {price}</p>
            <p>Available: {stock}</p>
            <button onClick={handelAddToCart}>Buy Now</button>
        </div>
    );
};

export default Bottle;