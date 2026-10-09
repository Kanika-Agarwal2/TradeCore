import React, { useState } from "react";
import "./Login.css";
import { API_URL, FRONTEND_URL } from "./config";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      window.location.href = "/";
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Login Card */}
      <div className="login-card">
        <h1>Login to Tradecore</h1>

        <p className="login-subtitle">
          Access your TradeCore trading dashboard
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
      </div>

      {/* Signup */}
      <p className="signup-text">
        Don't have an account?{" "}
        <a href={`${FRONTEND_URL}/signup`}>Sign up for free!</a>
      </p>

      <p className="demo-text">TradeCore Trading Platform</p>
    </div>
  );
}

export default Login;
