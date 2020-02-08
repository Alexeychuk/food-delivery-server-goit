const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  username: String,
  telephone: String,
  password: String,
  email: String,
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array
});

userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
