import React from "react";

function Hero() {
  return (
    <div className="container p-3 mb-5">
      <div className="row text-center">
        <img
          src="media/images/p1.png"
          alt="Hero Image"
          className="mb-5 mt-5 mx-auto"
          style={{ width: "65%" }}
        />

        <h1 className="mt-4 mb-4">Trade smarter. Track better.</h1>

        <p className="fs-5 text-muted">
          TradeCore is a full-stack simulated trading platform for exploring
          stocks, orders, portfolios, and funds through a modern dashboard.
        </p>

        <button
          className="p-2 btn fs-5 mb-5 mt-4 signupBtn"
          onClick={() => {
            window.location.href = "http://localhost:3000/dashboard";
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
