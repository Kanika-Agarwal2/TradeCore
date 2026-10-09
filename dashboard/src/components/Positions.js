import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/allPositions`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Positions:", res.data);
        setAllPositions(res.data);
      })
      .catch((error) => {
        console.log("Positions fetch error:", error);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = Number(stock.price) * Number(stock.qty);

              const profitLoss =
                curValue - Number(stock.avg) * Number(stock.qty);

              const isProfit = profitLoss >= 0;

              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{Number(stock.avg).toFixed(2)}</td>
                  <td>{Number(stock.price).toFixed(2)}</td>

                  <td className={profClass}>{profitLoss.toFixed(2)}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
