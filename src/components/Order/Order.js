import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducs';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart,setCart] = useCart(products)

    const handleDeletProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <Review key={product.id} product={product} handleDeletProduct={handleDeletProduct}/>)
                }
            </div>
            <div className="product-cart">
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button>
                            shipping
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;