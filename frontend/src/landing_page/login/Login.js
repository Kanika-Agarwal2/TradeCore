import React, { useState } from "react";

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

      const response = await fetch("http://localhost:3002/login", {
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

      window.location.replace("http://localhost:3000/");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5">
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

          <h2 className="fs-3 text-muted mt-4">Welcome back to TradeCore</h2>

          <p className="fs-5 text-muted">
            Login to access your simulated trading dashboard.
          </p>
        </div>

        <div className="col-1"></div>

        <div className="col-5">
          <h1 className="fs-2 text-muted">Login to TradeCore</h1>

          <p className="fs-5 text-muted">
            Enter your credentials to continue to your account.
          </p>

          <div className="mt-4">
            <h2 className="fs-3">Login</h2>

            <p className="text-muted">Access your TradeCore account</p>

            <form onSubmit={handleLogin}>
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

              {error && <p className="text-danger">{error}</p>}

              <button
                type="submit"
                className="btn signupBtn w-100 p-2 fs-5 mt-2"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-muted mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="aBtn">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
