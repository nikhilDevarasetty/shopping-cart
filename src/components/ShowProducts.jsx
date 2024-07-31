//components/ShowProducts.js
import React from "react";

function ShowProducts({ products, addProductToCartFunction }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p className="no-results">Sorry, No matching Product found.</p>
      ) : (
        products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addProductToCartFunction(product)}
            >
              Add to Shopping Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowProducts;
