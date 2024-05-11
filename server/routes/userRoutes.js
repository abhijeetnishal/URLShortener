const express = require('express');
const userRouter = new express.Router();

const {signup , login } = require('../controller/urserController');

userRouter.post('/v1/auth/signup',signup)

userRouter.post('/v1/auth/login',login)


module.exports = userRouter;