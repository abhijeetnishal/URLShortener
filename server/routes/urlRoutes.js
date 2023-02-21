const express = require('express');
const urlRouter = new express.Router();

const { getSpecificUrl, createUrl } = require('../controller/urlController');

urlRouter.get('/:shortURL', getSpecificUrl);

urlRouter.post('/', createUrl);


module.exports = urlRouter;