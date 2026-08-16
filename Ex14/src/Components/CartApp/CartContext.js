import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  const removeItem = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, i) => sum + parseFloat(i.price), 0);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
