// Import necessary modules
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// Require mongoose to work with MongoDB
const mongoose = require("mongoose");

// Initialize connection variable to null
let connection = null;

// Define asynchronous function to connect to MongoDB
async function dbConnect() {
  // Check if there is no existing connection
  if (!connection) {
    // Retrieve MongoDB connection string from environment variables
    const url = process.env.DB_URL;
    try {
      // Connect to MongoDB using the retrieved connection string
      connection = await mongoose.connect(url, {
        useNewUrlParser: true, // Use new URL parser
      });
      // Log successful connection
      console.log("Successfully connected to MongoDB Atlas!");
    } catch (error) {
      // Log connection failure
      console.error("Unable to connect to MongoDB Atlas!");
      console.error(error);
      // Throw error for handling in middleware
      throw error;
    }
  }
  // Return the established connection
  return connection;
}

// Export the function for use in other modules
module.exports = dbConnect;
