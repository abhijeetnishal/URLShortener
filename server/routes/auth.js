const express = require("express");
const { signup, login } = require("../controller/auth");
const { rateLimit } = require("../controller/rateLimit");
const authRouter = new express.Router();

authRouter.post("/auth/v1/signup", rateLimit, signup);
authRouter.post("/auth/v1/login", rateLimit, login);

module.exports = authRouter;
