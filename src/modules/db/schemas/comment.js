const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  product: mongoose.Schema.Types.ObjectId,
  author: mongoose.Schema.Types.ObjectId,
  text: String,
  mark: Number
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
