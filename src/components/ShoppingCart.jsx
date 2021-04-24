import React from "react";
import "./shoppingcart.css";

export default function ShoppingCart({
  cartItems,
  quantity,
  addToCart,
  removeFromCart,
}) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
                <p>Quantity: {item.qty}</p>
                <div className="buttons">
                  <button className="plus-btn" onClick={() => addToCart(item)}>
                    +
                  </button>
                  <button
                    className="minus-btn"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
              <h4>${(item.price * item.qty).toFixed(2)}</h4>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className={quantity === 0 ? "" : "summary"}>
        {quantity > 0 ? (
          <div className="totals">
            <h2>Shopping summary </h2>
            <p>{`Sub Total (${quantity} items): $${totalPrice.toFixed(2)}`}</p>
            <button>Check out</button>
          </div>
        ) : (
          <h5>Shopping Cart is empty</h5>
        )}
      </div>
    </div>
  );
}
