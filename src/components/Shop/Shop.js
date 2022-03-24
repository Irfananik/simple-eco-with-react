import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const storedCart = getStoreCart()
        const savedCart = []
        for(const id in storedCart) {
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity = storedCart[id]
                addProduct.quantity = quantity
                savedCart.push(addProduct)
                console.log(addProduct)
            }
            
        }
        setCart(savedCart)
    },[products])

    // for product cart
    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct.id)
        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id)
        if(!exist) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, selectedProduct]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="product-cart">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;