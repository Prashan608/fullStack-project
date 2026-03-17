import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate(); // ✅ ADD THIS

  async function handleForm(e) {
    e.preventDefault();

    const success = await loginUser(email, password);

    if (success) {
      navigate("/products"); // ✅ Redirect
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={handleForm}>
          <label>
            Email:
            <input
              type="email"
              required
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              required
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
