import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";

import { SearchContext } from "../context/searchContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext);

  // ✅ Auth State
  const { isAuth, logoutUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logoutUser();
    navigate("/login");
  }

  return (
    <div className="navbar">
      {/* Left Logo */}
      <div className="navbar-left">
        <Link to="/">ShopSphere</Link>
      </div>

      {/* Middle Search */}
      <div className="navbar-middle">
        <input
          type="text"
          placeholder="search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Right Links */}
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart({cartItems.length})</Link>

        {/* ✅ Show Username */}
        {isAuth && <p className="nav-user">Hi, {user?.name}</p>}

        {/* ✅ Login / Logout Conditional */}
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
