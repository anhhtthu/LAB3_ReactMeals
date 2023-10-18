import React from "react";
import CartFixed from "../components/Cart/CartFixed";
import HeaderLogo from "../components/Header/HeaderLogo";

export default function Header() {
  return (
    <div className="header-container">
      <HeaderLogo />
      <CartFixed />
    </div>
  );
}
