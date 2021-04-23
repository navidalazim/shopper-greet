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
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <p>Quantity: {item.qty}</p>
            <p>Total Price: {(item.price * item.qty).toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        {quantity > 0 ? (
          <>
            <h5>Shopping summary: </h5>
            <p>{`Sub Total (${quantity} items): ${totalPrice.toFixed(2)}`}</p>
          </>
        ) : (
          <h5>Shopping Cart is empty</h5>
        )}
      </div>
    </div>
  );
}
