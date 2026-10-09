import React from "react";
import { DASHBOARD_URL } from "../../config";
function Stats() {
  return (
    <div className="container p-2">
      <div className="row p-2">
        <div className="col-6 p-2">
          <h2>Built with confidence</h2>

          <h4 className="mt-5">Full-stack architecture</h4>

          <p className="text-muted fs-5">
            TradeCore connects a React-based interface with Node.js and
            Express.js APIs, MongoDB persistence, and protected authentication
            routes.
          </p>

          <h4 className="mt-5">Practical trading workflows</h4>

          <p className="text-muted fs-5">
            The platform simulates buying and selling stocks while handling
            quantity validation, available funds, holdings updates, and order
            persistence.
          </p>

          <h4 className="mt-5 ">Portfolio management</h4>

          <p className="text-muted fs-5">
            Track holdings, investment value, current value, available cash,
            margin usage, and dynamic profit and loss through the dashboard.
          </p>

          <h4 className="mt-5">Designed to learn by building</h4>

          <p className="text-muted fs-5">
            TradeCore brings together frontend development, backend APIs,
            authentication, databases, and financial application logic in one
            project.
          </p>
        </div>

        <div className="col-6 p-2">
          <img src="media/images/p2.png" style={{ width: "100%" }} />

          <div className="text-center mt-4">
            <a href="" className="mx-5 fs-5 aBtn">
              Explore TradeCore <i class="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href={DASHBOARD_URL} className="fs-5 aBtn">
              Open dashboard <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
