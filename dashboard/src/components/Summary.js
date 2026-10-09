import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { API_URL } from "./config";
const Summary = () => {
  const { username } = useContext(GeneralContext);

  const [funds, setFunds] = useState(null);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [fundsResponse, holdingsResponse] = await Promise.all([
          axios.get(`${API_URL}/allFunds`, {
            withCredentials: true,
          }),
          axios.get(`${API_URL}/allHoldings`, {
            withCredentials: true,
          }),
        ]);

        setFunds(fundsResponse.data);
        setHoldings(holdingsResponse.data);
      } catch (error) {
        console.log("Summary data fetch error:", error);
      }
    };

    fetchSummaryData();
  }, []);

  if (!funds) {
    return <div>Loading dashboard...</div>;
  }

  const currentValue = holdings.reduce((total, stock) => {
    return total + Number(stock.qty) * Number(stock.price);
  }, 0);

  const investment = holdings.reduce((total, stock) => {
    return total + Number(stock.qty) * Number(stock.avg);
  }, 0);

  const profitLoss = currentValue - investment;

  const profitLossPercentage =
    investment > 0 ? (profitLoss / investment) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      {/* Equity */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{(funds.availableCash / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>₹{(funds.usedMargin / 1000).toFixed(2)}k</span>
            </p>

            <p>
              Opening balance{" "}
              <span>₹{(funds.openingBalance / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Holdings */}
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitLoss >= 0 ? "profit" : "loss"}>
              ₹{(profitLoss / 1000).toFixed(2)}k{" "}
              <small>
                {profitLoss >= 0 ? "+" : ""}
                {profitLossPercentage.toFixed(2)}%
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{(currentValue / 1000).toFixed(2)}k</span>
            </p>

            <p>
              Investment <span>₹{(investment / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
