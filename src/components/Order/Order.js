import React from 'react';
import useProducts from '../../hooks/useProducs';

const Order = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h2>order:{products.length}</h2>
        </div>
    );
};

export default Order;