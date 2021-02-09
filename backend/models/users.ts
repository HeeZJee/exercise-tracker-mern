export {};
const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", Schema);

module.exports = User;
