import React from "react";
import { CartProvider } from "./CartContext";
import DishesList from "./DishesList";
import Cart from "./Cart";

function CartApp() {
  return (
    <CartProvider>
      <h3>Cart App</h3>
      <DishesList />
      <Cart />
    </CartProvider>
  );
}

export default CartApp;
