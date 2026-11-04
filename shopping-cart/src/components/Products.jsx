
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Products() {

  const { dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 2000 }
  ];

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    });
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Our Products</h2>

      <div className="row">

        {products.map(product => (
          <div className="col-md-4 mb-3" key={product.id}>

            <div className="card shadow-sm p-3">

              <h4>{product.name}</h4>

              <p>Price: ₹{product.price}</p>

              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;
