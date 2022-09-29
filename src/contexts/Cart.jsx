import { useState, createContext } from "react";

export const CartContext = createContext({
  cartDropdown: "",
  setCartDropdown: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const value = { cartDropdown, setCartDropdown };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
