const express = require("express");
const { signup, login } = require("../controller/auth");
const authRouter = new express.Router();

authRouter.post("/auth/v1/signup", signup);
authRouter.post("/auth/v1/login", login);

module.exports = authRouter;
