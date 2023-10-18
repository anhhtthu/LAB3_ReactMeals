import { createContext, useContext } from "react";
import { useState } from "react";
import { useItems } from "./ItemsContext";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { items } = useItems();

  const addToCart = (id) => {
    const myCartItem = [...cart];
    const mealInItems = items.find((item) => item.id === id);
    const isAvailable = myCartItem.some((item) => item.id === id);
    if (isAvailable) {
      const meal = myCartItem.find((item) => item.id === id);
      meal.amount += mealInItems.amount;
    } else {
      const newMeal = { ...mealInItems };
      myCartItem.push(newMeal);
    }
    setCart([...myCartItem]);
  };

  const increaseAmount = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (id === item.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      })
    );
  };

  const decreaseAmount = (id) => {
    const myCartItem = [...cart];
    const product = myCartItem.find((item) => item.id === id);
    product.amount -= 1;
    setCart([...myCartItem]);
  };

  const removeItemInCart = (id) => {
    const removeItems = cart.map((item) => {
      if (item.id === id && item.amount < 0) {
        return { ...cart, name: item.name, id: item.id };
      }
      return item;
    });
    setCart(cart.filter((item) => removeItems.id !== item.id));
  };

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.amount, 0);

  const totalAmount = cart
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(2);

  const totalPayment = () => {
    if (totalAmount < 1) {
      return alert("Your cart is empty, please add item to your cart");
    } else alert(`You total payment is $${totalAmount}`);
  };

  return (
    <CartContext.Provider
      value={{
        increaseAmount,
        decreaseAmount,
        removeItemInCart,
        totalItemsInCart,
        addToCart,
        cart,
        totalAmount,
        totalPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
