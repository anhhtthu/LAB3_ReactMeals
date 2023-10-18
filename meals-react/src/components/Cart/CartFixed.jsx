import React from "react";
import { useCart } from "../../contexts/CartContext";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useToggleModal } from "../../contexts/ToggleModalContext";

export default function CartFixed() {
  const { totalItemsInCart } = useCart();
  const { onOpen } = useToggleModal();

  return (
    <div className="cart-header" onClick={onOpen}>
      <BsFillCartCheckFill className="cart-icon" />
      <span className="cart-title">Your Cart</span>
      <span className="cart-header-amount">{totalItemsInCart}</span>
    </div>
  );
}
