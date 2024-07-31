import React from "react";

function Search({ searchProduct, productSearchUserFunction }) {
  return (
    <header className="App-header">
      <h1>Shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Products..."
          value={searchProduct}
          onChange={productSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default Search;
