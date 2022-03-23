import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0
    let shippingCharge = 0
    for(const product of cart){
        totalPrice += product.price
        shippingCharge += product.shipping
    }
    const tex = totalPrice * 0.1
    const grandTotalPrice = totalPrice + shippingCharge + tex

    return (
        <div className="cart">
            <div className="cart-text">
                <h3>Order summary</h3>
                <p>Selected products: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <h4>Grand total: ${grandTotalPrice}</h4>
            </div>
        </div>
    );
};

export default Cart;