import React from 'react';
import Price from './Price.jsx'
import './Product.css';


const Product = ({title, idx}) => {
    let oldPrice = ["125600", "150000", "200000", "30000"];
    let newPrice = ["54600", "14000", "22300", "25000"];
    let Description = [["3000 DPI", "5 Programmable Button"], ["Intutive Services","for Ipad 10Gen"], ["Transformer for the Phone", "Designed For I Phone"], ["Touch Pad with Stylus", "For All Android Devices"]];
    return (
        <div className='product'>
            <h3>{title}</h3>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    );
};

export default Product;