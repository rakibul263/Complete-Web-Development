import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import { useState } from 'react';

const ProductManagement = () => {

    const [products, setProduct] = useState([]);
    const handelAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProduct(newProducts);
    }

    return (
        <div>
            <ProductForm handelAddProduct={handelAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;