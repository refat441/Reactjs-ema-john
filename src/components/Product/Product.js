import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, ratings}=props.NewProduct;
    return (
        <div className='NewProduct'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Retings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.NewProduct)} className='btn-cart'>
                <p>Add to Chart</p>
                <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>
        </div>
    );
};

export default Product;