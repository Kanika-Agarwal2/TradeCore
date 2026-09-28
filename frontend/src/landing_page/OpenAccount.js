import React from "react";

import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container mb-5 p-5">
      <div className="row text-center">
        <h2 className="mb-4">Start using TradeCore</h2>

        <p className="fs-5 text-muted">
          Create an account and explore simulated trading, portfolio tracking,
          order management, and funds management.
        </p>

        <Link to="/signup">
          <button className="btn mb-5 fs-5 p-2 mt-4 signupBtn">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
