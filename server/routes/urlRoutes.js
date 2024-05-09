const express = require('express');
const urlRouter = express.Router();

const { getSpecificUrl, createUrl } = require('../controller/urlController');

// Route to redirect to original URL using short URL as ID
urlRouter.get('/:shortId', getSpecificUrl);

// Route to create a short URL
urlRouter.post('/', createUrl);

module.exports = urlRouter;