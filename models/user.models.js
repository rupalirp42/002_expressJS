let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  contact: Number,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
