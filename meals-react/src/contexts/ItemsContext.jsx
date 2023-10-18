import { createContext, useContext } from "react";
import { useState } from "react";
import API from "../API";

const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(API);

  const increaseAmount = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        if (id === item.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      })
    );
  };

  const decreaseAmount = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
    );
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        increaseAmount: increaseAmount,
        decreaseAmount: decreaseAmount,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
