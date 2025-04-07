import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ProductList.css";

const ProductList = () => {
  const { productList, addToCart } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(productList.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((p) => p.category === selectedCategory);

  return (
    <div className="product-list-wrapper">
      <div className="category-menu">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={`/imgg/${product.image}`}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
