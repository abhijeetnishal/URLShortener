const urlModel = require("../model/urlSchema");
const validUrl = require("valid-url");
const uniqueString = require("../utils/utils");
const dbConnect = require("../model/dbConnect");
const dotenv = require("dotenv");

dotenv.config();

// Define asynchronous function to handle specific URL retrieval
const getSpecificUrl = async (req, res) => {
  try {
    // Destructure shortId from request parameters
    const { shortId } = req.params;

    // Connect to the database
    await dbConnect();

    // Find URL data based on shortId
    const urlData = await urlModel.findOne({ shortId });

    // Retrieve the original URL from the database
    const originalUrl = urlData.originalUrl;

    // If original URL is found, redirect to it
    if (originalUrl) {
      res.redirect(originalUrl);
    } else {
      // If original URL is not found, send 404 status
      res.status(404).send("URL not found");
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Define asynchronous function to create a short URL
const createUrl = async (req, res) => {
  // Retrieve original URL from request body
  const { originalUrl } = req.body;

  // Validate the original URL
  if (validUrl.isUri(originalUrl)) {
    try {
      // Connect to the database
      await dbConnect();

      // Check if the URL already exists in the database
      const urlExist = await urlModel.findOne({ originalUrl });

      // If the URL exists, return the existing shortId
      if (urlExist) {
        const shortId = urlExist.shortId;
        res.status(201).json(`${process.env.REDIRECT_URL}/${shortId}`);
      } else {
        // If the URL does not exist, generate a new shortId and save the URL to the database
        const shortId = uniqueString.generateBase62String();
        const newUrl = new urlModel({
          originalUrl,
          shortId,
        });

        // Save the new URL to the database
        await newUrl.save();

        // Send the newly created short URL to the client
        res.status(201).json(`${process.env.REDIRECT_URL}/${shortId}`);
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // If the original URL is not valid, send a 400 status
    res.status(400).json("Please Enter a Valid URL");
  }
};

module.exports = {
  getSpecificUrl,
  createUrl,
};
