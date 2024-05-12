const express = require("express");
const { getSpecificUrl, createUrl } = require("../controller/urlController");

const urlRouter = new express.Router();

//This route is used to redirect to original url using short url as id
urlRouter.get("/:shortId", getSpecificUrl);
//This route is used to create short url
urlRouter.post("/", createUrl);

module.exports = urlRouter;
