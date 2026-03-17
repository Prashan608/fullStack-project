import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SearchProvider from "./context/searchContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  
  <AuthProvider>
    <CartProvider>
  <SearchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchProvider>
</CartProvider>
  </AuthProvider>

);
