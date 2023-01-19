import { useState, createContext, useEffect } from "react";

const addCartItem = (items, product) => {
  const existingItem = items.some((item) => item.id === product.id);

  if (existingItem) {
    return items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...product, quantity: 1 }];
};

const removeCartItem = (items, product) => {
  const selectedItem = items.find((item) => item.id === product.id);

  if (selectedItem.quantity === 1) {
    return items.filter((item) => item.id !== product.id);
  }

  return items.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCartItem = (items, product) => {
  return items.filter((item) => item.id !== product.id);
};

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);

  useEffect(() => {
    const totalValue = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setCartTotal(totalValue);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      removeCartItem(prevCartItems, productToRemove)
    );
  };

  const clearItemFromCart = (productToDelete) => {
    setCartItems((prevCartItems) =>
      clearCartItem(prevCartItems, productToDelete)
    );
  };

  const value = {
    cartDropdown,
    setCartDropdown,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
