import React from 'react';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
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
                <Cart cart ={cart}></Cart>
            </div>
           
        </div>
        
    );
};

export default Review;