import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.log("Orders fetch error:", error);
      });
  }, []);

  return (
    <>
      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      {allOrders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
          </div>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order, index) => {
                return (
                  <tr key={order._id || index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{Number(order.price).toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;