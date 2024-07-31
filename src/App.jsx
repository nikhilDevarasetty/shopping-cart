import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import ShowProducts from "./components/ShowProducts";
import UserCart from "./components/UserCart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const addProductToCartFunction = (product) => {
    const alreadyProduct = cartProducts.find(
      (item) => item.product.id === product.id
    );
    if (alreadyProduct) {
      const latestCartUpdate = cartProducts.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartProducts(latestCartUpdate);
    } else {
      setCartProducts([...cartProducts, { product: product, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (product) => {
    const updatedCart = cartProducts.filter(
      (item) => item.product.id !== product.id
    );
    setCartProducts(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const productSearchUserFunction = (event) => {
    setSearchProduct(event.target.value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        var products = res.products.slice(0, 5);
        products = products.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.images[0],
        }));

        setProducts(products);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="App">
      <Search
        searchProduct={searchProduct}
        productSearchUserFunction={productSearchUserFunction}
      />
      <main className="App-main">
        <ShowProducts
          products={filteredProducts}
          addProductToCartFunction={addProductToCartFunction}
        />

        <UserCart
          cartProducts={cartProducts}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartProducts={setCartProducts}
        />
      </main>
    </div>
  );
}

export default App;
