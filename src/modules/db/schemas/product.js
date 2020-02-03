const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const productSchema = new Schema({
  sku: Number,
  name: String,
  description: String,
  price: String,
  currency: String,
  creatorId: mongoose.Schema.Types.ObjectId,
  categories: Array,
  likes: Number
});

productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
