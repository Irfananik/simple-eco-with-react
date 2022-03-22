import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0
    for(const product of cart){
        totalPrice += product.price
    }

    return (
        <div className="cart">
            <div className="cart-text">
                <h3>Order summary</h3>
                <p>Selected products: {cart.length}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h4>Grand total: </h4>
            </div>
        </div>
    );
};

export default Cart;