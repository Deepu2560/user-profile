// importing requred liberaries
require("dotenv").config();

const jwt = require("jsonwebtoken");

// requiring user model for getting data or posting data
const User = require("../models/userModel");
const UserProfile = require("../Models/userProfileModel");

// newToken function to make jwt token of user
const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT__KEY}`);
};

// register function add new user in database
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      console.log("=>> User already exists", req.body.email);
      return res.status(400).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    user = await User.create(req.body);
    let userProfile = await UserProfile.create({ userId: user._id });

    const token = newToken(user);

    console.log(`=>> ${req.body.name} is registered. token: ${token}`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Registration ERROR", error);
    res.status(500).send({ error: true, token: "", message: error.message });
  }
};

// login function for user login.
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean().exec();

    if (!user) {
      console.log("=>> User not found :-", req.body.email);
      return res.status(404).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    console.log(user);
    // let match = user.checkPassword(req.body.password);

    // if (!match) {
    //   console.log("=>> password not match for :-", req.body.email);
    return res.status(400).send({
      error: true,
      token: "",
      mesasge: "Please check your email or password",
    });
    // }

    // const token = newToken(user);

    // console.log(`=>> ${user.name} is logged in`);

    // res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Login ERROR", error);
    res.status(500).send({ error: true, token: "", message: error.message });
  }
};

// exporting register and login function
module.exports = { register, login };
