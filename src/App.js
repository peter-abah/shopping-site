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

  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart} />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="items/:itemId" element={<Item addItem={addItem} />} />
        <Route path="cart" element={<Cart cart={cart} />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<div>Hello World</div>} />
      </Route>
    </Routes>
  );
}

export default App;
