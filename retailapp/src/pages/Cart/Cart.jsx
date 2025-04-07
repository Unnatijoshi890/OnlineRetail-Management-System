import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  const getTotalAmount = () => {
    return Object.values(cartItems).reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);
      return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
    }, 0);
  };

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Your Cart 🛒</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total (₹)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(cartItems).map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`/imgg/${item.image}`}
                      alt={item.name}
                      className="cart-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/imgg/default-image.jpg";
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {(() => {
                      const price = parseFloat(item.price);
                      return isNaN(price)
                        ? "N/A"
                        : `₹${(price * item.quantity).toFixed(2)}`;
                    })()}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Grand Total: ₹{getTotalAmount().toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
