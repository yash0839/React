
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {

  const { cartItems, dispatch } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h5 className="text-secondary">Your cart is empty!</h5>
      ) : (

        <>
          {cartItems.map(item => (

            <div
              className="card p-3 mb-3"
              key={item.id}
            >

              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                <div>
                  <h5>{item.name}</h5>
                  <p>₹{item.price}</p>
                </div>

                <div className="d-flex align-items-center gap-2">

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          quantity: item.quantity - 1
                        }
                      })
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          quantity: item.quantity + 1
                        }
                      })
                    }
                  >
                    +
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: item.id
                      })
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

          <h4 className="text-end mt-4">
            Total: ₹{totalPrice.toLocaleString('en-IN')}
          </h4>
        </>

      )}

    </div>
  );
}

export default Cart;
