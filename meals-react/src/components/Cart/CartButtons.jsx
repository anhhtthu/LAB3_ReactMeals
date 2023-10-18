import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useToggleModal } from "../../contexts/ToggleModalContext";

export default function CartButton() {
  const { onClose } = useToggleModal();
  const { totalPayment } = useCart();
  return (
    <div className="cart-buttons">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <button className="order-button" onClick={totalPayment}>
        Order
      </button>
    </div>
  );
}
