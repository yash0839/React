import React from 'react';
import { CartProvider } from './context/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  return (
    <CartProvider>

      <div className="container-fluid bg-light min-vh-100 py-4">

        <h1 className="text-center text-primary mb-4">
          My Shopping Store
        </h1>

        <Products />

        <hr className="my-5" />

        <Cart />

      </div>

    </CartProvider>
  );
}a

export default App;