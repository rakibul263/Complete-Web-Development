import React from 'react';
import Products from './Products.jsx'

const ProductTab = () => {
    return (
        <div>
            <Products title='Phone'  price={40000}/>
            <Products title='Laptop' price={50000}/>
            <Products title='macbook' price={12300}/>
        </div>
    );
};

export default ProductTab;