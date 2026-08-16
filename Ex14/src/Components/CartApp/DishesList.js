import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function DishesList() {
  const { addToCart, cart } = useContext(CartContext);
  const dishes = [
    { name: "Uthappizza", price: 4.99 },
    { name: "Zucchipakoda", price: 1.99 },
    { name: "Vadonut", price: 1.99 },
    { name: "Elaicheesecake", price: 2.99 },
  ];

  return (
    <div>
      <h3>Dishes</h3>
      {dishes.map((d, i) => (
        <div key={i}>
          {d.name} - ${d.price.toFixed(2)}{" "}
          <button onClick={() => addToCart(d)}>Add</button>
        </div>
      ))}
      <p>Cart count: {cart.length}</p>
    </div>
  );
}

export default DishesList;
