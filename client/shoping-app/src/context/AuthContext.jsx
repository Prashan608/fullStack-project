import { createContext, useState } from "react";


// ✅ Step 1: Create Context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // ✅ Step 2: Auth States
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  // ✅ Step 3: Register Function
  async function registerUser(name, email, password) {
    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, msg: data.msg || "Registration failed" };
      }

      return { success: true, msg: data.msg || "Registration successful" };
    } catch (error) {
      console.log("Register Error:", error.message);
      return { success: false, msg: "Something went wrong!" };
    }
  }

  // ✅ Step 4: Login Function
  async function loginUser(email, password) {
    try {
      // ✅ API Call
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // ❌ Invalid login
      if (!res.ok) {
        const errData = await res.json();
        alert(errData.msg);
        return false;
      }

      // ✅ Success Response
      const data = await res.json();

      console.log("Login Response:", data);

      // ✅ Save in State
      setToken(data.token);
      setUser(data.user);
      setIsAuth(true);

      // ✅ Save in LocalStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful ✅");
      return true;
    } catch (error) {
      console.log("Login Error:", error.message);
      alert("Something went wrong!");
      return false;
    }
  }


  // ✅ Step 4: Logout Function
  function logoutUser() {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.clear();
  }

  // ✅ Step 5: Provider Return
  return (
    <AuthContext.Provider
      value={{ user, token, isAuth, loginUser, logoutUser, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
