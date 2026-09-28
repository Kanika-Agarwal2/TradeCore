const { model } = require("mongoose");
const { FundsSchema } = require("../schemas/FundsSchema");

const FundsModel = new model("fund", FundsSchema);

module.exports = { FundsModel };