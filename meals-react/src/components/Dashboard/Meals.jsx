import React from "react";
import { useItems } from "../../contexts/ItemsContext";
import { useCart } from "../../contexts/CartContext";
export default function Meals() {
  const { items, increaseAmount, decreaseAmount } = useItems();
  const { addToCart } = useCart();

  return items.map((item) => (
    <div className="item" key={item.id}>
      <div className="item-left-info">
        <p className="item-name">{item.name}</p>
        <p className="item-category"> {item.category} </p>
        <p className="item-price"> ${item.price} </p>
      </div>
      <div className="item-right-addtocart">
        <div className="input-amount">
          <button onClick={() => decreaseAmount(item.id)}>-</button>
          <span className="amount-display">{item.amount}</span>
          <button onClick={() => increaseAmount(item.id)}>+</button>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(item.id, item.amount)}
        >
          +Add
        </button>
      </div>
    </div>
  ));
}
