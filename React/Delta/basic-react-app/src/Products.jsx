import React from 'react';
import './Products.css'

const Products = ({title, price}) => {
    // let isDiscount = price > 30000 ? "Discount 10%" : "No Discount";
    return (
        <div className='products'>
            <h3>{title}</h3>
            <p>Price: {price / 2}</p>
            {price > 30000 ? <p>Discount 40%</p> : null}
        </div>
    );
};

export default Products;