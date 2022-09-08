// importing mongoose connect database and dotenv to use .env file
const mongoose = require("mongoose");

require("dotenv").config();

// main connect function which connect server to backend I hided database link because of privacy purpose

const connect = () => {
  return mongoose.connect(`${process.env.URL}`);
};

// export connect function
module.exports = connect;
