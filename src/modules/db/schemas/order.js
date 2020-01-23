const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const orderSchema = new Schema({
  creator: mongoose.Schema.Types.ObjectId,
  productsList: [
    {
      product: mongoose.Schema.Types.ObjectId,
      type: String,
      itemsCount: Number
    }
  ],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String
});

orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
