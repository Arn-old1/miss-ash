import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this
import './Cart.css';

const Cart = ({ cart,setCart }) => {
  console.log('Cart component received:', cart);
  const handleRemove = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.priceUGX, 0);

  return (
    <div className="cart-page">
      <h2> Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>UGX {item.priceUGX.toLocaleString()}</p>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: UGX {total.toLocaleString()}</h3>

<Link to="/checkout">
  <button className="checkout-btn">Proceed to Checkout</button>
</Link>
        </>
      )}
    </div>
  );
};

export default Cart;