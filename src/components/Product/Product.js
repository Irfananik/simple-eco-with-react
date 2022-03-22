import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props
    const {name,seller,price,img,ratings} = product
    return (
        <div className="single-product-container">
           <div className="product-img">
                <img src={img} alt="" />
           </div>
           <div className="product-text">
               <h4>Title: {name.slice(1,10)}</h4>
               <p>Price: {price}$</p>
           </div>
           <div className="product-text1">
               <p>Seller: {seller}</p>
               <p>Rattings: {ratings}</p>
               
           </div>
           <button onClick={() => handleAddToCart(product)} className="btn-cart">
                    <p>Add to cart
                    <FontAwesomeIcon className="btn-icon" icon={faShoppingCart}></FontAwesomeIcon>
                    </p>
            </button>
        </div>
    );
};

export default Product;