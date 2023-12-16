let UserModel = require("../models/user.models");

// let createUser = async (req, res) => {
exports.createUser = async (req, res) => {
  try {
    // ----------Hard coded--------
    // const newUser = new UserModel({
    //   name: "Sonali Patil",
    //   age: 29,
    //   city: "Pune",
    // });
    // const savedUser = await newUser.save();
    // res.json(savedUser);

    // -----------using body method---------
    // let name = req.body.name;
    // let age = req.body.age;
    // let city = req.body.city;
    // console.log(name);
    // console.log(age);
    // console.log(city);

    // --------using body method but array---------
    // res.json([name, age, city]); 

    // -------------- using body method but object---------
    // let info = req.body;
    // res.json({ name: info.name, age: info.age, city: info.city });

    // const newUser = new UserModel({
    //   name: req.body.name,
    //   age: req.body.age,
    //   city: req.body.city,
    //   contact: req.body.contact,
    // });
    // const savedUser = await newUser.save();
    // res.json(savedUser);

    //  ---------------using query method----------
    // let name = req.query.name;
    // res.json(name);

    // const newUser = new UserModel({
    //   name: req.query.name,
    //   age: req.query.age,
    //   city: req.query.city,
    //   contact: req.query.contact,
    // });

    // -------------- using params method---------------
    // for this router url also changed router.post("/create/:name/:age/:city/:contact", userControllers.createUser);
    const newUser = new UserModel({
      name: req.params.name,
      age: req.params.age,
      city: req.params.city,
      contact: req.params.contact,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.log("Error", error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.json(users);
  } catch (error) {
    console.error("Error retrieving documents:", error);

    res.status(500).send("Internal Server Error");
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.ids;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { name: "Sonali Patil" },
      { new: true } // Return the modified document
    );
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).send("Internal Server Error");
  }
};

// module.exports = createUser;
// module.exports = getUser;
// module.exports = updateUser;
// module.exports = deleteUser;
