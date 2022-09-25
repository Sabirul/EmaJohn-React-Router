import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCart = Products =>{
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        if(Products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            if(savedCart){
                for(const key in savedCart){
                    const addedProduct = Products.find(product => product.key === key );
                    if(addedProduct){
                        const quantity = savedCart[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct)
                    }
                }
    
                }

                setCart(storedCart);
    
                
        }

    },[Products])
    return[cart,setCart];
    

}
export default useCart;