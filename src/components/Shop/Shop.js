import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    // for product cart
    const handleAddToCart = (product) =>{
        console.log(product.id)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="product-cart">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;