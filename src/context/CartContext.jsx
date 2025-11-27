'use client';

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load saved cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dashdine-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("dashdine-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount: cart.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
