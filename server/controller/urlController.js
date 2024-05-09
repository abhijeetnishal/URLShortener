const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const uniqueString = require("../utils/utils");
require("dotenv").config();

const getSpecificUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlData = await urlModel.findOne({ shortId });

    if (urlData) {
      res.redirect(urlData.originalUrl);
    } else {
      res.status(404).json({ message: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (validUrl.isUri(originalUrl)) {
    try {
      const urlExist = await urlModel.findOne({ originalUrl });

      if (urlExist) {
        const shortUrl = `${process.env.REDIRECT_URL}/${urlExist.shortId}`;
        res.status(201).json(shortUrl);
      } else {
        const shortId = uniqueString.generateBase62String();
        const newUrl = await urlModel.create({ originalUrl, shortId });
        const shortUrl = `${process.env.REDIRECT_URL}/${newUrl.shortId}`;
        res.status(201).json(shortUrl);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Please Enter a Valid URL" });
  }
};

module.exports = {
  getSpecificUrl,
  createUrl,
};