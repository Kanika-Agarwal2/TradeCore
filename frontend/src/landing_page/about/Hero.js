import React from "react";

function Hero() {
  return (
    <div className="container text-muted">
      <div className="row p-5">
        <h3 className="mt-5 text-center">
          We built TradeCore to make stock trading technology simple,
          <br />
          intuitive, and accessible for learning.
        </h3>
      </div>
      <div
        className="row fs-5 mt-5 border-top p-5"
        style={{ lineHeight: "1.7" }}
      >
        <div className="col-6 p-3">
          <p>
            TradeCore is a full-stack simulated stock trading platform created
            as a software engineering project to explore real-world trading
            workflows, authentication, portfolio management, and financial data
            handling.
          </p>
          <p>
            The platform brings together a responsive landing page, secure
            authentication, a trading dashboard, order management, holdings,
            positions, and funds management in one application.
          </p>
          <p>
            TradeCore focuses on understanding how a modern trading platform
            works from both the frontend and backend, from placing an order to
            updating portfolio values and available funds.
          </p>
        </div>

        <div className="col-6 p-3">
          <p>
            The application is powered by React.js on the frontend and Node.js,
            Express.js, and MongoDB on the backend.
          </p>
          <p>
            Authentication is handled using JWT-based protected routes, while
            trading data such as orders, holdings, and funds is persisted using
            MongoDB.
          </p>
          <p>
            TradeCore is continuously being developed as a portfolio project to
            explore full-stack development, backend APIs, database design, and
            financial application workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
