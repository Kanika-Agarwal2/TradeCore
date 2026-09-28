import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="Media\images\logo.png" style={{ width: "50%" }} />

            <p className="mt-3 mb-3">
              &copy; 2026, TradeCore.
              <br /> Full-stack simulated trading platform.
            </p>

            <ul class="d-flex list-unstyled gap-2 pb-3 border-bottom">
              <li>
                <a>
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>

              <li>
                <a>
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>

              <li>
                <a>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a>
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>

            <ul class="d-flex list-unstyled gap-2 ">
              <li>
                <a>
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a>
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>

              <li>
                <a>
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col ">
            <ul className="list-unstyled footer-sec">
              <h4>Platform</h4>

              <br />

              <li>
                <a href="#">Dashboard</a>
              </li>

              <br />

              <li>
                <a href="#">Orders</a>
              </li>

              <br />

              <li>
                <a href="#">Holdings</a>
              </li>

              <br />

              <li>
                <a href="#">Positions</a>
              </li>

              <br />

              <li>
                <a href="#">Funds</a>
              </li>

              <br />

              <li>
                <a href="#">Portfolio</a>
              </li>

              <br />
            </ul>
          </div>

          <div className="col footer-sec">
            <h4>Features</h4>

            <br />

            <ul className="list-unstyled">
              <li>
                <a href="">Simulated Trading</a>
              </li>

              <br />

              <li>
                <a href="">Order Management</a>
              </li>

              <br />

              <li>
                <a href="">Portfolio Tracking</a>
              </li>

              <br />

              <li>
                <a href="">Funds Management</a>
              </li>

              <br />

              <li>
                <a href="">Profit & Loss Tracking</a>
              </li>

              <br />

              <li>
                <a href="">Secure Authentication</a>
              </li>

              <br />
            </ul>
          </div>

          <div className="col footer-sec">
            <h4>Project</h4>

            <br />

            <ul className="list-unstyled">
              <li>
                <a href="">About TradeCore</a>
              </li>

              <br />

              <li>
                <a href="">Technology</a>
              </li>

              <br />

              <li>
                <a href="">Architecture</a>
              </li>

              <br />

              <li>
                <a href="">GitHub</a>
              </li>

              <br />

              <li>
                <a href="">Developer</a>
              </li>

              <br />
            </ul>
          </div>

          <div className="col footer-sec">
            <h4>Quick links</h4>

            <br />

            <ul className="list-unstyled">
              <li>
                <a href="">Get started</a>
              </li>

              <br />

              <li>
                <a href="">Dashboard</a>
              </li>

              <br />

              <li>
                <a href="">About</a>
              </li>

              <br />

              <br />

              <br />

              <li>
                <a href="">Contact</a>
              </li>
              <br />
            </ul>
          </div>
        </div>

        <div style={{ fontSize: "13px" }}>
          <p>
            TradeCore is a full-stack simulated stock trading platform created
            as a software engineering project. It is designed for learning,
            experimentation, and demonstration of modern web development and
            financial application workflows.
          </p>

          <p>
            TradeCore does not execute real stock market transactions, provide
            investment advice, manage real funds, or operate as a registered
            brokerage or financial institution.
          </p>

          <p>
            All trades, holdings, portfolio values, funds, and profit or loss
            displayed on the platform are part of the application's simulated
            environment.
          </p>

          <p>
            The project demonstrates frontend development, backend APIs,
            authentication, database persistence, order management, and
            portfolio calculations using modern web technologies.
          </p>

          <p>
            Built with React.js, Node.js, Express.js, MongoDB, and JWT-based
            authentication.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
