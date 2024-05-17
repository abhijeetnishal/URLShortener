const express = require("express");

const isAuthenticated = require("../middlewares/auth");
const getAllUserUrls = require("../controller/user");

const userRouter = new express.Router();

// API endpoint to get all url's shortened by user
userRouter.get("/api/v1/user/:id", isAuthenticated, getAllUserUrls);

module.exports = userRouter;
