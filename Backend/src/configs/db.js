// importing mongoose connect database and dotenv to use .env file
const mongoose = require("mongoose");

require("dotenv").config();

// main connect function which connect server to backend I hided database link because of privacy purpose

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://deepu2560:MlQjXpkKQPcvjCgj@cluster0.ep3wiix.mongodb.net/deepanshu?retryWrites=true&w=majority",
  );
};

// export connect function
module.exports = connect;
