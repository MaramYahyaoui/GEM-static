// App.jsx
import React from "react";
import Layout from "./components/Layout/Layout";
import Routers from "./Routers/Routers";
import { CartContext, CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <CartProvider>
        <Layout>
      <Routers />
    </Layout>
    </CartProvider>
  
  );
}

export default App;
