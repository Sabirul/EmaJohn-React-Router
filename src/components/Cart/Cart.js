import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    // console.log(props);
    
    const {cart} = props;
    let total  = 0;
    let totalQuantity = 0;

    for(const product of cart){
        product.quantity = !product.quantity ? 1 : product.quantity; 
        total += product.price * product.quantity;
        totalQuantity += product.quantity; 
    }

    const tax = (total*15) /100;
    const grandTotal = tax + total;
    return (
        <div>
            <h2>Order Summary:</h2>
            <h3>Item Orders: {totalQuantity}</h3>
            <h4>Total: {total.toFixed(2)}</h4>
            <h4>Tax: {tax.toFixed(2)}</h4>
            <h4>Shipping: 15</h4>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
