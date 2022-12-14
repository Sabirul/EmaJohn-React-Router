import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity,key} = props.product;
    return (
        <div className='product-details'>
            <div>
            <h3 className='product-name'>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=> props.remove(key)} className='btn-regular'> Remove</button>
            </div>
            
        </div>
    );
};

export default ReviewItem;