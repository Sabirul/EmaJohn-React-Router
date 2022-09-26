import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const history = useNavigate();
    const placeOrder = ()=>{
        history('/placeOrder');
        setCart([]);
        clearTheCart();
    }
  
    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    cart.map(product => <ReviewItem 
                        key = {product.key}
                        product={product}
                        remove={handleRemove}
                        ></ReviewItem>)
                }

            </div>

            <div className='cart-container'>
                <Cart cart ={cart}>
                <button onClick={placeOrder} className='btn-regular'>Place Your order</button>
                </Cart>
            </div>
           
        </div>
        
    );
};

export default Review;