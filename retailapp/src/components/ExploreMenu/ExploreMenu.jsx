import React, { useState, useCallback, useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../context/StoreContext";

// Data
import groceryData from "./Data/groceryData";
import dairyData from "./Data/dairyData";
import vegetablesData from "./Data/vegetablesData";

// Images
const groceryImg = "/imgg/grocery_img.jpg";
const dairyImg = "/imgg/dairy.jpg";
const vegetablesImg = "/imgg/vegtables.jpg";

// Mapping
const categoryDataMap = {
  Grocery: groceryData,
  Dairy: dairyData,
  Vegetable: vegetablesData,
};

const menuItems = [
  { name: "Grocery", image: groceryImg },
  { name: "Dairy", image: dairyImg },
  { name: "Vegetable", image: vegetablesImg },
];

const ExploreMenu = () => {
  const { addToCart } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleItemClick = useCallback((category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    setSelectedProduct(null);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      alert(`${selectedProduct.name} (x${quantity}) added to cart!`);
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Welcome to our store!</h1>
      <p>We offer a wide range of products, including:</p>
      {/* Category Grid */}
      <div className="explore-menu-list">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-products ${
              selectedCategory === item.name ? "selected" : ""
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      {/* Product List */}
      {selectedCategory && !selectedProduct && (
        <div className="selected-item-details">
          <h2>Products in {selectedCategory}</h2>
          <div className="product-list">
            {categoryDataMap[selectedCategory]?.map((product, index) => (
              <div
                key={index}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <img src={`/imgg/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
                <p>Stock: {product.stock}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Product Detail View */}
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <img src={`/imgg/${selectedProduct.image}`} alt={selectedProduct.name} />
          <p>
            <strong>Price:</strong> ₹{selectedProduct.price}
          </p>
          <p>
            <strong>Stock:</strong> {selectedProduct.stock}
          </p>
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="back" onClick={() => setSelectedProduct(null)}>
            Back to Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;