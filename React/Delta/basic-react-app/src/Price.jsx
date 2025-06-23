import React from 'react';
import './Price.css';

const Price = ({oldPrice, newPrice}) => {
    return (
        <div className='price'>
            <span className='oldPrice'>{oldPrice}$</span>
            &nbsp; &nbsp; &nbsp;
            <span className='newPrice'>{newPrice}$</span>
        </div>
    );
};

export default Price;