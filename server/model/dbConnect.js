const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

//require mongoose and env with the following code:
const mongoose = require("mongoose");

//Create and export a function to house the connection:
async function dbConnect() {
  //use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  const url =process.env.DB_URL
  mongoose.connect(
      url,
      {
        //these are options to ensure that the connection is done properly
        useNewUrlParser: true,
      }
  )
  //Use a then catch block to show if the connection was successful or not:
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });
}

module.exports = dbConnect;
