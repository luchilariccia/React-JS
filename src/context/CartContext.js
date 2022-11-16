import React, { useState, useContext } from "react";
const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState ([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find (product => product.id ===id) ? true : false ;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, newQuantity) => {
        const { quantity = 0 } = cart.find (prod => prod.id === item.id) || {};
        const newCart = cart.filter(prod => prod.id !== item.id);
        setCart([...newCart, {...item, quantity: quantity + newQuantity}])
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }


    console.log ('carrito: ', cart);


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
                {children}
        </CartContext.Provider>
    )
}