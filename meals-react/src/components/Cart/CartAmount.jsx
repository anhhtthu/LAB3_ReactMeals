import React from "react";
import { useCart } from "../../contexts/CartContext";

export default function CartAmount() {
  const { totalAmount } = useCart();
  return (
    <div className="cart-amount">
      <p>Total Amount</p>
      <span>${totalAmount}</span>
    </div>
  );
}
