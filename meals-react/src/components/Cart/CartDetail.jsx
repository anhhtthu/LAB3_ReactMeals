import React from "react";
import { useCart } from "../../contexts/CartContext";

export default function CartDetail() {
  const { increaseAmount, decreaseAmount, cart } = useCart();
  return (
    <div className="cart-items-holder">
      {cart &&
        cart.map((item) => {
          if (item.amount !== 0) {
            return (
              <div className="cart-items" key={item.id}>
                <div className="cart-item">
                  <h2>{item.name}</h2>
                  <span className="item-price">${item.price}</span>
                  <span className="item-amount">x {item.amount}</span>
                </div>
                <div className="cart-item-buttons">
                  <button onClick={() => decreaseAmount(item.id)}>-</button>
                  <button onClick={() => increaseAmount(item.id)}>+</button>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
