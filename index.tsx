import React, { useState } from 'react';
import { render } from 'react-dom';
import Cart from './src/components/Cart/Cart';
import Header from './src/components/Layout/Header';
import Meals from './src/components/Meals/Meals';
import CartProvider from './src/store/CartProvider';

import './style.css';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

render(<App />, document.getElementById('root'));
