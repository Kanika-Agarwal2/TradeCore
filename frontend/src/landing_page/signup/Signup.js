import React, { useState } from "react";
import { API_URL } from "../../config";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setMessage("Signup successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.log(error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5" style={{ lineHeight: "2rem" }}>
      <div className="row align-items-center">
        <div className="col-6 text-center">
          <img
            src="Media/images/p3.png"
            alt="TradeCore Dashboard"
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          />

          <h2 className="fs-3 text-muted mt-4">Start your trading journey</h2>

          <p className="fs-5 text-muted">
            Create your account and explore your personalized TradeCore
            dashboard.
          </p>
        </div>

        <div className="col-1"></div>

        <div className="col-5">
          <h1 className="fs-2 text-muted">Create your TradeCore account</h1>

          <p className="fs-5 text-muted">
            Create an account and start exploring the TradeCore simulated
            trading platform.
          </p>

          <div className="mt-4">
            <h2 className="fs-3">Sign up now</h2>

            <p className="text-muted">
              Create your account to continue to TradeCore
            </p>

            <form onSubmit={handleSignup}>
              <input
                type="text"
                className="form-control mb-3 p-3"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="email"
                className="form-control mb-3 p-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3 p-3"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3 p-3"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && <p className="text-danger">{error}</p>}

              {message && <p className="text-success">{message}</p>}

              <button
                type="submit"
                className="btn signupBtn w-100 p-2 fs-5 mt-2"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </form>

            <p className="text-center text-muted mt-4">
              Already have an account{" "}
              <a href="/login" className="aBtn">
                Login
              </a>
            </p>

            <p
              className="text-center text-muted"
              style={{
                fontSize: "13px",
                lineHeight: "1.5",
              }}
            >
              By proceeding, you agree to the TradeCore project terms and
              privacy guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
