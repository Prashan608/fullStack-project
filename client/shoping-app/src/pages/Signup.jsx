import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    // ✅ Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      // ✅ API Call via AuthContext
      const result = await registerUser(name, email, password);

      if (!result.success) {
        setError(result.msg);
        return;
      }

      // ✅ Success
      alert("✅ Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error.message);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Create Account</h1>
        <p>Join ShopSphere to start shopping</p>

        {error && <div className="error-message">❌ {error}</div>}

        <form onSubmit={handleSignup}>
          <label>
            Full Name:
            <input
              type="text"
              required
              placeholder="Enter your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              required
              placeholder="Enter password (min 6 characters)..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              required
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
