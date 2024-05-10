const express = require('express');
const urlRouter = new express.Router();

const { getSpecificUrl, createUrl , signup , login } = require('../controller/urlController');

//This route is used to redirect to original url using short url as id
urlRouter.get('/:shortId', getSpecificUrl);

//This route is used to create short url
urlRouter.post('/', createUrl);

urlRouter.post('/v1/auth/signup',signup)

urlRouter.post('/v1/auth/login',login)


module.exports = urlRouter;