import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)
    let quantity = 0
    let totalPrice = 0
    let shippingCharge = 0
    for(const product of cart){
        quantity += product.quantity
        totalPrice += product.price * product.quantity
        shippingCharge += product.shipping
    }
    const tex = totalPrice * 0.1
    const grandTotalPrice = totalPrice + shippingCharge + tex

    return (
        <div className="cart">
            <div className="cart-text">
                <h3>Order summary</h3>
                <p>Selected products: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <h4>Grand total: ${grandTotalPrice}</h4>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;