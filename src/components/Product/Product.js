import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    
    
    const {name, seller, price, stock, img, star}= props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product-details'>
            <img src={img}></img>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p><small>only {stock} left in stock- order soon.</small></p>
                <Rating 
                  initialRating={star}
                  emptySymbol="far fa-star icon"
                  fullSymbol="fas fa-star icon"
                  readonly></Rating>
                <br></br>
                <button onClick={()=> props.click(props.product)}
                 className='btn-regular'>{element} add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;