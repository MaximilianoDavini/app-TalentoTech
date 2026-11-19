import React, { useState, useContext, createContext } from 'react';
export const CartContext = createContext();
//Hook personalizado
export const useCart = () => {
     const context = useContext(CartContext);
      if (!context) 
        { 
            throw new Error('useCart debe ser usado dentro de un CartProvider');
         } 
         return context;
         };

//Creamos el provider y sus funciones

export const CartProvider = ({ children }) => { //A
    const [cart, setCart] = useState([]);
    const addToCart = (producto, cantidad) => {
    const itemInCart = cart.find(item => item.id === producto.id);
    if (itemInCart) {
        const updateCart = cart.map (item => 
            item.id === producto.id
            ? {
                ...item, cantidad: item.cantidad + cantidad
            } : item
        );
        setCart(updateCart);
    } else {
        setCart(prevCart => [...prevCart, {...producto, cantidad}]);
    }
    }

// vaciamos el carrito
const clearCart = () => { 
    setCart([]);
};

// Sumamos los totales y cantidades del carrito

const getCantidadCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
};

// Obtengo la totalidad del valor del carrito

const getTotalCart = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
};

// Retornamos el provider
return (
<CartContext.Provider value = { {cart, addToCart, clearCart, getCantidadCart, getTotalCart} } >
    {children}
</CartContext.Provider>
);

}; //B