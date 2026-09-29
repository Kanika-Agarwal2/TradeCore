require("dotenv").config();
const { authMiddleware } = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { FundsModel } = require("./model/FundsModel");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoutes);

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

  // tempPositions.forEach((item) => {
  //   let newPosition = new PositionsModel({
  //     product: item.product,
  //     name: item.name,
  //     qty: item.qty,
  //     avg: item.avg,
  //     price: item.price,
  //     net: item.net,
  //     day: item.day,
  //     isLoss: item.isLoss,
  //   });

  //   newPosition.save();
  // });
  //res.send("Done!");
//});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      user: req.user._id,
    });

    res.json(allHoldings);
  } catch (error) {
    console.log("Holdings fetch error:", error);

    res.status(500).json({
      message: "Unable to fetch holdings",
    });
  }
});
app.get("/allFunds", authMiddleware, async (req, res) => {
  try {
    let funds = await FundsModel.findOne({
      user: req.user._id,
    });

    if (!funds) {
      funds = new FundsModel({
        user: req.user._id,
        availableCash: 10000,
        usedMargin: 0,
        openingBalance: 10000,
      });

      await funds.save();
    }

    res.status(200).json(funds);
  } catch (error) {
    console.log("Funds fetch error:", error);

    res.status(500).json({
      message: "Unable to fetch funds",
    });
  }
});
app.post("/addFunds", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        message: "Enter a valid amount",
      });
    }

    const funds = await FundsModel.findOne({
  user: req.user._id,
});

    if (!funds) {
      return res.status(500).json({
        message: "Funds account not found",
      });
    }

    funds.availableCash += Number(amount);
    funds.openingBalance += Number(amount);

    await funds.save();

    res.status(200).json({
      message: "Funds added successfully",
      funds,
    });
  } catch (error) {
    console.log("Add funds error:", error);

    res.status(500).json({
      message: "Unable to add funds",
    });
  }
});
app.post("/withdrawFunds", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        message: "Enter a valid amount",
      });
    }

    const withdrawAmount = Number(amount);

    const funds = await FundsModel.findOne({
      user: req.user._id,
    });

    if (!funds) {
      return res.status(500).json({
        message: "Funds account not found",
      });
    }

    if (funds.availableCash < withdrawAmount) {
      return res.status(400).json({
        message: `Insufficient funds. Available cash: ₹${funds.availableCash.toFixed(2)}`,
      });
    }

    funds.availableCash -= withdrawAmount;

    await funds.save();

    res.status(200).json({
      message: "Funds withdrawn successfully",
      funds,
    });
  } catch (error) {
    console.log("Withdraw funds error:", error);

    res.status(500).json({
      message: "Unable to withdraw funds",
    });
  }
});
app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({
      user: req.user._id,
    }).sort({ _id: -1 });

    res.status(200).json(allOrders);
  } catch (error) {
    console.log("Orders fetch error:", error);

    res.status(500).json({
      message: "Unable to fetch orders",
    });
  }
});
app.get("/allPositions", authMiddleware, async (req, res) => {
  const allPositions = await PositionsModel.find({
    user: req.user._id,
  });

  res.json(allPositions);
});
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const quantity = Number(qty);
    const orderPrice = Number(price);

    if (quantity <= 0 || orderPrice <= 0) {
      return res.status(400).json({
        message: "Quantity and price must be greater than 0",
      });
    }
    //BUY
    if (mode === "BUY") {
      const totalCost = quantity * orderPrice;

      let funds = await FundsModel.findOne({
        user: req.user._id,
      });

      if (!funds) {
        return res.status(500).json({
          message: "Funds account not found",
        });
      }

      if (funds.availableCash < totalCost) {
        return res.status(400).json({
          message: `Insufficient funds. Available cash: ₹${funds.availableCash.toFixed(2)}`,
        });
      }
      const newOrder = new OrdersModel({
        user: req.user._id,
        name,
        qty: quantity,
        price: orderPrice,
        mode,
      });

      await newOrder.save();
      funds.availableCash -= totalCost;
      funds.usedMargin += totalCost;
      await funds.save();
      const existingHolding = await HoldingsModel.findOne({
        user: req.user._id,
        name,
      });

      if (existingHolding) {
        const oldQty = existingHolding.qty;
        const oldAvg = existingHolding.avg;

        const newQty = oldQty + quantity;

        const newAvg = (oldQty * oldAvg + quantity * orderPrice) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        existingHolding.price = orderPrice;

        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          user: req.user._id,
          name,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
        });

        await newHolding.save();
      }

      return res.status(201).json({
        message: "Buy order placed successfully",
      });
    }
    //SELL
    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({
        user: req.user._id,
        name,
      });

      if (!existingHolding) {
        return res.status(400).json({
          message: "You don't own this stock",
        });
      }

      if (existingHolding.qty < quantity) {
        return res.status(400).json({
          message: `Insufficient quantity. You only own ${existingHolding.qty} shares.`,
        });
      }

      const newOrder = new OrdersModel({
        user: req.user._id,
        name,
        qty: quantity,
        price: orderPrice,
        mode,
      });

      await newOrder.save();

      // Money received from selling
      const totalSellValue = quantity * orderPrice;

      // Find funds account
      const funds = await FundsModel.findOne({
        user: req.user._id,
      });

      if (!funds) {
        return res.status(500).json({
          message: "Funds account not found",
        });
      }
      funds.availableCash += totalSellValue;

      const investedAmount = quantity * existingHolding.avg;

      funds.usedMargin -= investedAmount;

      if (funds.usedMargin < 0) {
        funds.usedMargin = 0;
      }

      await funds.save();

      // Update holdings
      existingHolding.qty -= quantity;

      if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({
          _id: existingHolding._id,
        });
      } else {
        existingHolding.price = orderPrice;

        await existingHolding.save();
      }

      return res.status(201).json({
        message: "Sell order placed successfully",
      });
    }

    return res.status(400).json({
      message: "Invalid order mode",
    });
  } catch (error) {
    console.log("New order error:", error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

mongoose.connect(uri)
    .then(() => {
        console.log("DB connected successfully!");

        app.listen(PORT, () => {
            console.log(`App started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed:");
        console.log(err);
    });