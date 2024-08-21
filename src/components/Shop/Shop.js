import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]); 
    const[cart, setcart] = useState([]);            //this is for order summary

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    const handleAddToCart = (NewProduct) =>{        //this is for order summary
        console.log(NewProduct);
        const newCart = [...cart, NewProduct]
        setcart(newCart);
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(NewProduct=><Product 
                        key={NewProduct.id} 
                        NewProduct={NewProduct}
                        handleAddToCart={handleAddToCart} //this is for order summary
                        ></Product> )
                }
            </div>

            <div className="card-container">
                <h2>Order Summary</h2>
                <p>selected items: {cart.length}</p> 
            </div>
        </div>
    );
};

export default Shop;