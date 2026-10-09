import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "./Funds.css";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [amount, setAmount] = useState("");
  const [showWithdraw, setShowWithdraw] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/allFunds`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setFunds(res.data);
      })
      .catch((error) => {
        console.log("Funds fetch error:", error);
      });
  }, []);

  if (!funds) {
    return <div>Loading funds...</div>;
  }

  return (
    <>
      {/* ADD FUNDS POPUP */}
      {showAddFunds && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "350px",
            }}
          >
            <h4>Add Funds</h4>

            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "15px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <div>
              <button
                className="btn btn-green"
                onClick={async () => {
                  try {
                    if (!amount || Number(amount) <= 0) {
                      alert("Enter a valid amount");
                      return;
                    }

                    const response = await axios.post(
                      "http://localhost:3002/addFunds",
                      {
                        amount: Number(amount),
                      },
                      {
                        withCredentials: true,
                      },
                    );

                    setFunds(response.data.funds);
                    setAmount("");
                    setShowAddFunds(false);

                    alert("Funds added successfully");
                  } catch (error) {
                    console.log("Add funds error:", error);

                    alert(
                      error.response?.data?.message || "Unable to add funds",
                    );
                  }
                }}
              >
                Add Funds
              </button>

              <button
                className="btn btn-grey"
                onClick={() => {
                  setAmount("");
                  setShowAddFunds(false);
                }}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WITHDRAW FUNDS POPUP */}
      {showWithdraw && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "350px",
            }}
          >
            <h4>Withdraw Funds</h4>

            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "15px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <div>
              <button
                className="btn btn-blue"
                onClick={async () => {
                  try {
                    if (!amount || Number(amount) <= 0) {
                      alert("Enter a valid amount");
                      return;
                    }

                    const response = await axios.post(
                      "http://localhost:3002/withdrawFunds",
                      {
                        amount: Number(amount),
                      },
                      {
                        withCredentials: true,
                      },
                    );

                    setFunds(response.data.funds);
                    setAmount("");
                    setShowWithdraw(false);

                    alert("Funds withdrawn successfully");
                  } catch (error) {
                    console.log("Withdraw funds error:", error);

                    alert(
                      error.response?.data?.message ||
                        "Unable to withdraw funds",
                    );
                  }
                }}
              >
                Withdraw
              </button>

              <button
                className="btn btn-grey"
                onClick={() => {
                  setAmount("");
                  setShowWithdraw(false);
                }}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FUNDS BUTTONS */}
      <div className="funds">
        <button className="btn btn-green" onClick={() => setShowAddFunds(true)}>
          Add funds
        </button>

        <button className="btn btn-blue" onClick={() => setShowWithdraw(true)}>
          Withdraw
        </button>
      </div>

      {/* FUNDS DETAILS */}
      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table funds-table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableCash.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash.toFixed(2)}</p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
