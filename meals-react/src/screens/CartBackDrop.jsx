import React from "react";
import { useToggleModal } from "../contexts/ToggleModalContext";

export default function CartBackDrop() {
  const { isOpen, onClose } = useToggleModal();

  return isOpen && <div className="cart-backdrop" onClick={onClose}></div>;
}
