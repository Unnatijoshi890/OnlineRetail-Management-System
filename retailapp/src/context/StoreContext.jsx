import React, { createContext, useState } from "react";
// Data
import groceryData from "../components/ExploreMenu/Data/groceryData";
import dairyData from "../components/ExploreMenu/Data/dairyData";
import vegetablesData from "../components/ExploreMenu/Data/vegetablesData";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const productList = [
    ...groceryData.map((product, index) => ({
      ...product,
      id: `g${index + 1}`, // e.g. g1, g2, ...
      category: "Grocery",
      price: parseInt(product.price.replace(/[^\d]/g, "")),
    })),
    ...dairyData.map((product, index) => ({
      ...product,
      id: `d${index + 1}`, // e.g. d1, d2, ...
      category: "Dairy",
      price: parseInt(product.price.replace(/[^\d]/g, "")),
    })),
    ...vegetablesData.map((product, index) => ({
      ...product,
      id: `v${index + 1}`, // e.g. v1, v2, ...
      category: "Vegetables",
      price: parseInt(product.price.replace(/[^\d]/g, "")),
    })),
  ];
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cleanedProduct = {
      ...product,
      price: typeof product.price === "number" ? product.price : parseInt(product.price.replace(/[^\d]/g, "")),
    };
  
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === cleanedProduct.id);
      if (existingIndex !== -1) {
        return [
          ...prev.slice(0, existingIndex),
          { ...prev[existingIndex], quantity: prev[existingIndex].quantity + 1 },
          ...prev.slice(existingIndex + 1),
        ];
      } else {
        return [...prev, { ...cleanedProduct, quantity: 1 }];
      }
    });
  
    setCartItems((prev) => {
      const existing = prev[cleanedProduct.id];
      const quantity = existing ? existing.quantity + 1 : 1;
      return {
        ...prev,
        [cleanedProduct.id]: { ...cleanedProduct, quantity },
      };
    });
  };
  

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === productId);
      if (existingIndex !== -1) {
        if (prev[existingIndex].quantity > 1) {
          return [
            ...prev.slice(0, existingIndex),
            { ...prev[existingIndex], quantity: prev[existingIndex].quantity - 1 },
            ...prev.slice(existingIndex + 1),
          ];
        } else {
          return [...prev.slice(0, existingIndex), ...prev.slice(existingIndex + 1)];
        }
      } else {
        return prev;
      }
    });
  };
  return (
    <StoreContext.Provider
      value={{ productList, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
