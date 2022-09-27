// required dotenv liberary and config it to use env variables
require("dotenv").config();

// jwtwebtoken to create and check token of user for header
const jwt = require("jsonwebtoken");

// verifing token function it uses an JWT__KEY which I stored in env for security purpose
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT__KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

// main authenticate function it take req.header.authentication and verify token and return user
module.exports = async (req, res, next) => {
  // checking is header have token or not
  if (!req.headers.authorization)
    return res.status(400).send({ message: "Token not provided or Invalid" });

  // getting token
  const token = req.headers.authorization;

  // defing user variable to user data.
  let user;

  try {
    // verifing user token
    user = await verifyToken(token);
  } catch (error) {
    // checking error
    console.log("Error:", error);
    res.send(400).send({ message: "Token not provided or Invalid" });
  }

  // token is valid. user retrieved from the token in the request object
  req.user = user.user;

  // next for end middleware
  return next();
};
