import React from 'react';
import './Products.css'

const Products = ({title, price}) => {
    return (
        <div className='products'>
            <h3>{title}</h3>
            <p>Price: {price / 2}</p>
        </div>
    );
};

export default Products;