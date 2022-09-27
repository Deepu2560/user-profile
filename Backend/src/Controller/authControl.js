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

    console.log(`=>> ${req.body.email} is registered. token: ${token}`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Registration server ERROR", error);
    res.status(500).send({ error: true, token: "", message: error.message });
  }
};

// login function for user login.
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log("=>> User not found :-", req.body.email);
      return res.status(404).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    let match = user.checkPassword(req.body.password);

    if (!match) {
      console.log("=>> password not match for :-", req.body.email);
      return res.status(400).send({
        error: true,
        token: "",
        mesasge: "Please check your email or password",
      });
    }

    const token = newToken(user);

    console.log(`=>> ${user.email} is logged in`);

    res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Login server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

const edit = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
      .lean()
      .exec();

    const token = newToken(user);

    console.log(`=>> ${user.name} is edited in`);

    res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>>> User edit server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

const userDelete = async (req, res) => {
  try {
    let user = await user.findOne({ _id: req.params.id });

    if (!user) {
      console.log("=>> User not found");
      return res.status(404).send({ error: true, message: "User not found" });
    }

    user = await User.findByIdAndDelete(req.params.id);

    console.log(`=>> User delete with id ${req.params.id}`);
    res
      .status(200)
      .send({ error: false, message: "User deleted successfully" });
  } catch (error) {
    console.log("=>>> User edit server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

// exporting register and login function
module.exports = { register, login, edit, userDelete };
