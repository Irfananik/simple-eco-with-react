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
                    <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;