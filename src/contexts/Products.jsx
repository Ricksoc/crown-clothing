import { useState, createContext, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase";

import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", "title", SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
