import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col mb-5">
          <img src="Media\images\index.png" style={{ width: "70%" }} />
        </div>

        <div className="col mb-5">
          <h2>Learn and explore trading technology</h2>

          <p className="mt-5">
            TradeCore provides a practical environment for exploring stock
            trading workflows, portfolio management, and financial application
            development.
          </p>

          <a className="aBtn" href="">
            Explore TradeCore <i class="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-5">
            Understand how authentication, orders, holdings, funds, and
            portfolio calculations work together in a full-stack application.
          </p>

          <a className="aBtn" href="">
            Explore the platform <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
