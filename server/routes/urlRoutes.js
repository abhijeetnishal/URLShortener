const express = require('express');
const urlRouter = new express.Router();

const { getSpecificUrl, createUrl } = require('../controller/urlController');

//This route is used to redirect to original url using short url as id
urlRouter.get('/:shortId', getSpecificUrl);

//This route is used to create short url
urlRouter.post('/', createUrl);


module.exports = urlRouter;