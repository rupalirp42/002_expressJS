let express = require("exoress");
let mongoose = require("mongoose");

let appPractice = express();

let connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/rupali", {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch {
    console.log("Error", error);
  }
};
connectDB();
