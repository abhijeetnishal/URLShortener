const express = require("express");
const { getSpecificUrl, createUrl } = require("../controller/urlController");
const {isValidURL} =require("../middlewares/url")
const urlRouter = new express.Router();

//This route is used to redirect to original url using short url as id
urlRouter.get("/:shortId", getSpecificUrl);
//This route is used to create short url
urlRouter.post("/",isValidURL, createUrl);

module.exports = urlRouter;
