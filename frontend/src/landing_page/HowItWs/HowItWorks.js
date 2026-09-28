import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Sign up for TradeCore using your email and password. Your account is securely stored and protected with authentication.",
    },
    {
      number: "02",
      title: "Explore the Platform",
      description:
        "Access your TradeCore dashboard to explore stocks, monitor your watchlist, view holdings, and track your virtual portfolio.",
    },
    {
      number: "03",
      title: "Place Buy & Sell Orders",
      description:
        "Choose a stock, enter the quantity and price, and place simulated buy or sell orders through the trading interface.",
    },
    {
      number: "04",
      title: "Track Your Portfolio",
      description:
        "View your holdings, investment value, current value, and profit or loss as your simulated trades update your portfolio.",
    },
    {
      number: "05",
      title: "Manage Your Funds",
      description:
        "Add or withdraw virtual funds and monitor your available cash, used margin, and account balance from the Funds section.",
    },
    {
      number: "06",
      title: "Learn Through Practice",
      description:
        "Use TradeCore to understand trading workflows, portfolio management, authentication, APIs, and financial data handling in a simulated environment.",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h1>How TradeCore Works</h1>
            <p
              className="text-muted mt-3"
              style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
            >
              TradeCore provides a simple way to explore stock trading workflows
              through a simulated investment platform.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row p-5">
          {steps.map((step, index) => {
            return (
              <div className="col-md-6 mb-5" key={index}>
                <div className="d-flex">
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "#263238",
                      marginRight: "25px",
                      minWidth: "45px",
                    }}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3 style={{ fontSize: "1.3rem" }}>{step.title}</h3>

                    <p
                      className="text-muted mt-3"
                      style={{ lineHeight: "1.7" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-3 mb-5">
        <div className="row p-5">
          <div className="col-12 text-center">
            <h2>Built for Learning & Experimentation</h2>

            <p
              className="text-muted mt-3"
              style={{
                maxWidth: "750px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              TradeCore is a simulated trading platform built as a full-stack
              software engineering project. It focuses on authentication, order
              management, portfolio tracking, funds management, and real-world
              application workflows.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
