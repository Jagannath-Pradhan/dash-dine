// 'use client';

// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Load saved cart from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("dashdine-cart");
//     if (saved) setCart(JSON.parse(saved));
//   }, []);

//   // Save to localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("dashdine-cart", JSON.stringify(cart));
//   }, [cart]);

//   // Add Item to Cart
//   const addToCart = (item) => {
//     setCart((prev) => [...prev, item]);
//   };

//   // remove Item from Cart
//   // const removeFromCart = (id) => {
//   //   setCart((prev) => prev.filter((c) => c.id !== id));
//   // };
// const removeFromCart = (_id) => {
//   setCart(prev => prev.filter(item => item._id !== _id));
// };

//   // Clear Cart
//   // const clearCart = () => setCart([]);
//   const clearCart = () => {
//   clearCart();
//   setAppliedCoupon(null);
// };


//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         cartCount: cart.length
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);









'use client';

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart initially
  const loadCart = () => {
    const saved = localStorage.getItem("dashdine-cart");
    setCart(saved ? JSON.parse(saved) : []);
  };

  useEffect(() => {
    loadCart();

    // Listen to cart updates from anywhere
    const handleCartUpdate = () => loadCart();

    window.addEventListener("cart-updated", handleCartUpdate);
    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);

  const addToCart = (item) => {
    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("dashdine-cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const removeFromCart = (_id) => {
    const updated = cart.filter(item => item._id !== _id);
    setCart(updated);
    localStorage.setItem("dashdine-cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("dashdine-cart");
    window.dispatchEvent(new Event("cart-updated"));
  };

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











// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // --- Load cart from localStorage ---
//   useEffect(() => {
//     const saved = localStorage.getItem("dashdine-cart");
//     if (saved) setCart(JSON.parse(saved));
//   }, []);

//   // --- Save cart to localStorage ---
//   useEffect(() => {
//     localStorage.setItem("dashdine-cart", JSON.stringify(cart));
//   }, [cart]);

//   // --- Add Item to Cart ---
//   const addToCart = (item) => {
//     setCart(prev => [...prev, item]);
//   };

//   // --- Update Item Quantity ---
//   const updateQuantity = (id, newQty) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: newQty, totalPrice: calculateItemTotal(item, newQty) } : item
//       )
//     );
//   };

//   // --- Update Portion ---
//   const updatePortion = (id, portion) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { 
//               ...item,
//               selectedPortion: portion,
//               totalPrice: calculateItemTotal({ ...item, selectedPortion: portion }, item.quantity)
//             }
//           : item
//       )
//     );
//   };

//   // --- Update Addons ---
//   const updateAddons = (id, addons) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { 
//               ...item,
//               selectedAddons: addons,
//               totalPrice: calculateItemTotal({ ...item, selectedAddons: addons }, item.quantity)
//             }
//           : item
//       )
//     );
//   };

//   // --- Remove Item ---
//   const removeItem = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   // --- Clear Cart ---
//   const clearCart = () => setCart([]);

//   // --- Calculate Total for ONE item ---
//   const calculateItemTotal = (item, quantity) => {
//     let price = item.basePrice;

//     if (item.selectedPortion?.price) price = item.selectedPortion.price;

//     if (item.selectedAddons?.length > 0) {
//       item.selectedAddons.forEach(a => price += a.price);
//     }

//     return price * quantity;
//   };

//   const cartCount = cart.length;

//   return (
//     <CartContext.Provider value={{
//       cart,
//       cartCount,
//       addToCart,
//       updateQuantity,
//       updatePortion,
//       updateAddons,
//       removeItem,
//       clearCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
