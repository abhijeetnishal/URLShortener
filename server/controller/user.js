const urlModel = require("../model/urlSchema");
const dbConnect = require("../config/dbConnect");
const dotenv = require("dotenv");

dotenv.config();

// Define asynchronous function to handle specific URL retrieval
const getAllUserUrls = async (req, res) => {
  try {
    const { id } = req.params;

    if (id && id !== "") {
      // Connect to the database
      await dbConnect();

      // Find all URLs created by the user
      const userUrls = await urlModel.find({ userId: id });

      return res.status(200).json({ data: userUrls });
    } else {
      res.status(400).json({ message: "User Id missing" });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getAllUserUrls;
