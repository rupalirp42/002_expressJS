const userControllers = require("../controllers/user.controllers");

const express = require("express");

const router = express.Router();

router.post("/create", userControllers.createUser);
// router.post("/create/:name/:age/:city/:contact", userControllers.createUser);

router.get("/read", userControllers.getUser);

router.put("/update/:id", userControllers.updateUser);

router.delete("/delete/:id", userControllers.deleteUser);

module.exports = router;
