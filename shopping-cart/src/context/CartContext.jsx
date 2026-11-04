
import React, { createContext, useReducer } from 'react';

import {
  cartReducer,
  initialState
} from './CartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
