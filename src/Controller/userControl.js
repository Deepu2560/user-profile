// importing requried liberaries
const express = require("express");

require("dotenv").config();

// user and userProfile model for getting or posting data.
const User = require("../models/userModel");
const UserProfile = require("../Models/userProfileModel");

// authorization middleware to check for data this requried so that none else can breakthrough and get data of users
const Autenticate = require("../Middleware/authenticate");

// getting register and login route function
const { register, login } = require("./authControl");

// express router
const router = express.Router();

// this is to get full detail of user from database
router.get("/user/details", Autenticate, async (req, res) => {
  try {
    const user = req.user;

    console.log(`==> getting user data for ${user.name}`);
    res.status(201).send({ error: false, token: user });
  } catch (error) {
    console.log("==> getting user Error", error);
    res.status(500).send({ error: true, token: "Server error" });
  }
});

// router.post for register purpose
router.post("/register", register);

// router post for login purpose
router.post("/login", login);

// exporting routers
module.exports = router;
