import React from "react";

function Team() {
  return (
    <div className="container text-muted">
      <div className="row p-5">
        <h2 className="text-center">Creator</h2>
      </div>

      <div className="row p-5 fs-5" style={{ lineHeight: "1.7" }}>
        <div className="col-6 p-3 text-center">
          <img
            src="Media\images\kanika.jpeg"
            style={{ borderRadius: "100%", width: "50%", height: "80%" }}
          />
          <h4 className="mt-5">Kanika Agarwal</h4>

          <h5>Creator & Developer</h5>
        </div>

        <div className="col-6 p-3">
          <p>
            TradeCore was created as a full-stack software engineering project
            to explore the development of a modern stock trading platform.
          </p>
          <p>
            The project focuses on building practical features such as user
            authentication, order management, stock holdings, portfolio
            tracking, funds management, and dynamic profit and loss
            calculations.
          </p>

          <p>
            The platform combines frontend development with backend APIs,
            database persistence, and authentication to create an end-to-end
            trading simulation.
          </p>

          <p>
            Built with React.js, Node.js, Express.js, MongoDB, and JWT-based
            authentication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
