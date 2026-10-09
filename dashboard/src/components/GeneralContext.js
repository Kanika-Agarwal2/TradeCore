import React, { useState, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import { API_URL } from "./config";
const GeneralContext = React.createContext({
  username: "",
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [username, setUsername] = useState("");

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState("");
  useEffect(() => {
    fetch(`${API_URL}/verify`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setUsername(data.user.username);
        }
      })
      .catch((error) => {
        console.log("Username fetch error:", error);
      });
  }, []);

const handleOpenBuyWindow = (uid, price) => {
  setIsBuyWindowOpen(true);
  setIsSellWindowOpen(false);
  setSelectedStockUID(uid);
  setSelectedStockPrice(price);
};

const handleCloseBuyWindow = () => {
  setIsBuyWindowOpen(false);
  setSelectedStockUID("");
  setSelectedStockPrice("");
};

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        username,

        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />
      )}

      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
