import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducs';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart,setCart] = useCart(products)

    const handleDeletProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <Review key={product.id} product={product} handleDeletProduct={handleDeletProduct}/>)
                }
            </div>
            <div className="product-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;