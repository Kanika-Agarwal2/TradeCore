import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch("http://localhost:3002/verify", {
          method: "GET",
          credentials: "include",
        });

        setIsLoggedIn(response.ok);
      } catch (error) {
        console.log("Login check error:", error);
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3002/logout", {
        method: "POST",
        credentials: "include",
      });

      setIsLoggedIn(false);

      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <nav
      class="navbar navbar-expand-lg border sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="Media\images\logo.png" style={{ width: "25%" }} />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 fs-5"
            style={{ opacity: 0.7 }}
          >
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active"
                to="/how-it-works"
                style={{ whiteSpace: "nowrap" }}
              >
                How It Works
              </Link>
            </li>

            {!isLoggedIn && (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <li class="nav-item">
                <button
                  class="nav-link active btn btn-link"
                  onClick={handleLogout}
                  style={{
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
