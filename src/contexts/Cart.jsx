import { useState, createContext } from "react";

const addCartItem = (items, product) => {
  const existingItem = items.some((item) => item.id === product.id);

  if (existingItem) {
    return items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
  };

  const value = { cartDropdown, setCartDropdown, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
