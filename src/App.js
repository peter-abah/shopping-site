import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Shop, Item, Cart } from './routes';

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const filteredCart = cart.filter(({id}) => id !== item.id);
    setCart([...filteredCart, item]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart}/>} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="items/:itemId" element={<Item addItem={addItem} />} />
        <Route path="cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<div>Hello World</div>} />
      </Route>
    </Routes>
  );
}

export default App;
