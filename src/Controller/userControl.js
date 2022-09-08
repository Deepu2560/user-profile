// importing requried liberaries
const express = require("express");

require("dotenv").config();

// user and userProfile model for getting or posting data.
const User = require("../models/userModel");
const UserProfile = require("../Models/userProfileModel");

// authorization middleware to check for data this requried so that none else can breakthrough and get data of users
const Autenticate = require("../Middleware/authenticate");

// getting register, edit and login route function
const { register, login, edit } = require("./authControl");

// express router
const router = express.Router();

// this is to get full detail of user from database
router.get("/user/details", Autenticate, async (req, res) => {
  try {
    const user = req.user;

    console.log(`==> getting user data for ${user.email}`);
    res
      .status(201)
      .send({ error: false, user, message: "Getting user by token" });
  } catch (error) {
    console.log("==> getting user Error", error);
    res
      .status(500)
      .send({ error: true, user: "Server error", message: error.message });
  }
});

// this is to get all users list
router.get("/user/list", Autenticate, async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    console.log(`==> getting all users list`);
    res
      .status(201)
      .send({ error: false, user, message: "Getting all users list" });
  } catch (error) {
    console.log("==> getting user Error", error);
    res
      .status(500)
      .send({ error: true, user: "Server error", message: error.message });
  }
});

// router.post for register purpose
router.post("/register", register);

// router post for login purpose
router.post("/login", login);

// router.put for edit user data from database
router.put("/edit/:id", Autenticate, edit);

// exporting routers
module.exports = router;
