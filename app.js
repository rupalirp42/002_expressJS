const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require("./routes/user.routes");
const databaseConnection = require("./database/database.database");
// const connectDB = require("./database/database.database");


// connectDB();
databaseConnection.connectDB();

// const createUser = require("./controllers/user.controllers");
// const getUser = require("./controllers/user.controllers");
// const updateUser = require("./controllers/user.controllers");
// const deleteUser = require("./controllers/user.controllers");

// const userControllers = require("./controllers/user.controllers");

// app.use("/rupali", (req, res, next) => {
//   //   console.log("Server connected.");
//   res.send("<h1>Hello Rupali</h1>");
// });

// app.use("/", (req, res, next) => {
//   //   console.log("Server connected.");
//   res.send("<h1>Hello World</h1>");
// });

// app.post("/create", createUser);

app.use(userRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
});
