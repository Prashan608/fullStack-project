import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to ShopSphere 🛒</h1>
          <p>
            Discover the best products at the best prices.  
            Shop electronics, fashion, jewelry and more!
          </p>

          <Link to="/products" className="hero-btn">
            Explore Products
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping"
          />
        </div>
      </section>

      {/* ✅ Categories Section */}
      <section className="categories">
        <h2>Shop by Categories</h2>

        <div className="category-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Jewelery</div>
          <div className="category-card">Men's Clothing</div>
          <div className="category-card">Women's Clothing</div>
        </div>
      </section>

      {/* ✅ Featured Products Section */}
      <section className="featured">
        <h2>Featured Products ⭐</h2>
        <p>Top trending products will be displayed here soon...</p>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© 2026 ShopSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
