import React from 'react';
import Products from './Products.jsx'

const ProductTab = () => {
    // let option = [<li>"hi-tech"</li>, <li>"latest"</li>, <li>"new"</li>];
    // let option = ["hi-tech", "latest", "new"];
    // let option2 = {a: "hi-tech", b: "latest", c: "new"};
    return (
        <div>
            <Products title='Phone'  price={40000}/>
            <Products title='Laptop' price={50000}/>
            <Products title='macbook' price={12300}/>
        </div>
    );
};

export default ProductTab;