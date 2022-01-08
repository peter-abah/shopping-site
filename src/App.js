import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Home, Shop, Item, Cart, ThankYou } from "./routes";

function App() {
  const [cart, setCart] = useState([]);

  const getItemQuantityInCart = (id) => {
    const item = cart.filter((item) => item.id === id)[0];
    return item ? item.quantity : 0;
  };

  const addItem = (item) => {
    const quantity = getItemQuantityInCart(item.id) + item.quantity;
    item = { ...item, quantity };

    const filteredCart = cart.filter(({ id }) => id !== item.id);
    setCart([...filteredCart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => id !== item.id);
    setCart(filteredCart);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart} />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="items/:itemId" element={<Item addItem={addItem} />} />
        <Route path="cart" element={<Cart cart={cart} clearCart={clearCart} removeItem={removeItem} />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<div>Hello World</div>} />
      </Route>
    </Routes>
  );
}

export default App;
