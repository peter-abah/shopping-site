import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Shop } from './routes';
import { getItem } from './data';

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (itemId, quantity) => {
    const item = getItem(itemId);
    setCart([...cart, { item, quantity }]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout itemNo={cart.length}/>} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/*<Route path="items/:itemId" element={<Item addItem={addItem} />} />
        <Route path="cart" element={<Cart cart={cart} />} />*/}
      </Route>
    </Routes>
  );
}

export default App;
