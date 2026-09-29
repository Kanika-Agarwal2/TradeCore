const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },

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
