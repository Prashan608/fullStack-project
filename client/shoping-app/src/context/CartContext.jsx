import { createContext, useState } from "react";

// ✅ Context Object
export const CartContext = createContext();

function CartProvider({ children }) {
  // ✅ Cart Items State
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add To Cart Function (with Quantity)
  function addToCart(product) {
    setCartItems((prevItems) => {
      // Check if product already exists
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      // If exists → increase quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      // If new → add with quantity = 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  // ✅ Remove From Cart Function
  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  // increase quntatiy

 function increaseQty(id) {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}

 function decreaseQty(id) {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart,increaseQty,decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
