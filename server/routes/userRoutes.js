const express = require("express");
const { signup, login } = require("../controller/userController");

const userRouter = new express.Router();

userRouter.post("/v1/auth/signup", signup);
userRouter.post("/v1/auth/login", login);

module.exports = userRouter;
