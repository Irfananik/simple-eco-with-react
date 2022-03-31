import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
const Review = (props) => {
    const {product, handleDeletProduct} = props
    const {name,shipping,quantity,price,img} = product
    return (
        <div className="review-item">
            <div className="review-item-img">
                <img src={img} alt="" />
            </div>
            <div className="review-items-details-container">
                <div className="review-item-details">
                    <h5 className="review-text">Name {name}</h5>
                    <p className="review-text">Price: {price}</p>
                    <p className="review-text">Shipping: {shipping}</p>
                </div>
                <div className="delete-container">
                    <button className="delete-container">
                        <FontAwesomeIcon onClick={() => handleDeletProduct(product)} className="dlt-btn" icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;