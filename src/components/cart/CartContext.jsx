import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sauvegarde auto dans localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Ajouter au panier
  const addToCart = useCallback((product, quantity = 1) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index >= 0) {
        const newCart = [...prevCart];
        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity + quantity
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  }, []);

  // Supprimer un article
  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  // Vider le panier
  const clearCart = useCallback(() => setCart([]), []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
