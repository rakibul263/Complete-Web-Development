import React from 'react';
import Products from './Products.jsx'
import Product from './Product.jsx';
import './ProductTab.css';

const ProductTab = () => {
    // let option = [<li>"hi-tech"</li>, <li>"latest"</li>, <li>"new"</li>];
    // let option = ["hi-tech", "latest", "new"];
    // let option2 = {a: "hi-tech", b: "latest", c: "new"};
    return (
        <div>
            <h2>Blockbuster Deal For Shop Now</h2>
            <div className='product-tab'>
                <Product title="Logitech MX Master" idx={0}></Product>
                <Product title="Apple Pencil 2nd Gen" idx={1}></Product>
                <Product title="Zebronic Zab-Transformer" idx={2}></Product>
                <Product title="Patronic Toad" idx={3}></Product>
            </div>
        </div>
    );
};

export default ProductTab;