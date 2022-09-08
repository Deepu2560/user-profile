// importing required liberaries
const express = require("express");
const cors = require("cors");

// importing connect function which connects from database
const connect = require("./src/configs/db");

// user controller all required routes
const userController = require("./src/Controller/userControl");

// app is used for all express function in server I am only using app.use which is mainly used for middleware and app.listen to start server
const app = express();

// using cors() for not getting any cors error in future
app.use(cors());

// express.json() to get data in json format
app.use(express.json());

// route for user
app.use("/auth", userController);

// app.listen to start I used process.env.PORT for heroku deployment
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();

    console.log(`==> Server started and port :- ${process.env.PORT || 8080}`);
  } catch (error) {
    console.log("==> ERROR :-", error);
  }
});
