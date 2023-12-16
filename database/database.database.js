const mongoose = require("mongoose");

// let connectDB = async () => {
exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/rupali", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error", error);
  }
};

// module.exports = connectDB;
