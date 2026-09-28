const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  availableCash: {
    type: Number,
    required: true,
    default: 10000,
  },

  usedMargin: {
    type: Number,
    required: true,
    default: 0,
  },

  openingBalance: {
    type: Number,
    required: true,
    default: 10000,
  },
});

module.exports = { FundsSchema };