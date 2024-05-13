const express = require("express");
const { getSpecificUrl, createUrl, getAllUserUrls } = require("../controller/urls");

const urlRouter = new express.Router();

urlRouter.get("/v1/apis/urls", getAllUserUrls);
//This route is used to redirect to original url using short url as id
urlRouter.get("/:shortId", getSpecificUrl);
//This route is used to create short url
urlRouter.post("/", createUrl);

module.exports = urlRouter;
