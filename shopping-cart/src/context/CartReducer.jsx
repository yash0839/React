
export const initialState = {
  cartItems: []
};

export function cartReducer(state, action) {

  switch (action.type) {

    case 'ADD_TO_CART': {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, quantity: 1 }
        ]
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload
        )
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter(item => item.quantity > 0)
      };

    default:
      return state;
  }
}
