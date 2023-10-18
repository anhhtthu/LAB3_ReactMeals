import { createContext, useContext, useState } from "react";

const ToggleModalContext = createContext();

export function useToggleModal() {
  return useContext(ToggleModalContext);
}

export function ToggleModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ToggleModalContext.Provider value={{ onClose, onOpen, isOpen }}>
      {children}
    </ToggleModalContext.Provider>
  );
}
