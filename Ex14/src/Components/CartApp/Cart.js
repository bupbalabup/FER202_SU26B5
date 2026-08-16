import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      {cart.map((c, i) => (
        <div key={i}>
          {c.name} - ${c.price}{" "}
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
