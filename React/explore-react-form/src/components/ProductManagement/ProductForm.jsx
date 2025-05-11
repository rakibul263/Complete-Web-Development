import { useState } from "react";

const ProductForm = ({handelAddProduct}) => {

    const [error, setError] = useState();

    const handelProductSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        if(name.length === 0){
            setError('Product name is required');
            return;
        }else if(price.length === 0){
            setError('Product price is required');
            return;
        }
        else if(quantity.length === 0){
            setError('Product quantity is required');
            return;
        }else{
            setError('');
        }

        const newProduct = { name, price, quantity };
        console.log(newProduct);

        event.target.name.value = '';
        event.target.price.value = '';
        event.target.quantity.value = '';

        handelAddProduct(newProduct);

    }
    return (
        <div>
            <form onSubmit={handelProductSubmit}>
                <input type="text" name="name" id="name" placeholder='Product Name'/><br />
                <input type="text" name="price" id="price" placeholder='Product Price'/><br />
                <input type="text" name="quantity" id="quantity" placeholder='Product Quantity'/><br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p style={{color: 'red'}}>{error}</p>
            }
            
        </div>
    );
};

export default ProductForm;