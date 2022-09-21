// importing required liberaries
const express = require("express");
const cors = require("cors");

// importing connect function which connects from database
const connect = require("./src/configs/db");

// user controller all required routes and srver homepage
const userController = require("./src/Controller/userControl");
const homePage = require("./serverhomePage");

// app is used for all express function in server I am only using app.use which is mainly used for middleware and app.listen to start server
const app = express();

// using cors() for not getting any cors error in future
app.use(cors());

// express.json() to get data in json format
app.use(express.json());

// main / route will return a html page which will tell about backend routes
app.get("/", (req, res) => {
  console.log("==> Showing home page");
  res.status(200).send(homePage);
});

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
