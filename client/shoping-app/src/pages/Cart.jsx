import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // ✅ Total Price Calculation (with quantity)
  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        <>
          {/* ✅ Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">₹ {item.price}</p>

                  {/* ✅ Quantity Controls */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                {/* ✅ Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total Price */}
          <h2 className="cart-total">
            Total: ₹ {totalPrice.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
