import React from "react";
import CartAmount from "../components/Cart/CartAmount";
import CartButton from "../components/Cart/CartButtons";
import CartDetail from "../components/Cart/CartDetail";
import { useToggleModal } from "../contexts/ToggleModalContext";

export default function Cart() {
  const { isOpen } = useToggleModal();
  return (
    isOpen && (
      <div className="cart-container">
        <CartDetail />
        <CartAmount />
        <CartButton />
      </div>
    )
  );
}
