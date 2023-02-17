const express = require('express');
const urlRouter = new express.Router();

const { getAllUrls, getSpecificUrl, createUrl, updateUrl, deleteUrl } = require('../controller/urlController');

//The first route that we are going to create will return all the data that we have stored in the database:
//urlRouter.get('/urls', getAllUrls);

//And as we don't always want to get all posts, let's create a route that returns only one post according to the id parameter 
//that is provided in the request parameters:
urlRouter.get('/urls/:shortURL', getSpecificUrl);

//In addition to returning data, we also need to insert some, for that we will create a route where 
//we can add the properties that we specify in our schema:
urlRouter.post('/urls', createUrl);


//If we need to update one of the properties of a specific post, we will create a route where we will send the id of the post 
//in the parameters as well as send the properties that we want to update in the body of the request:

//urlRouter.put('/urls/:id', updateUrl);

//Last but not least, we need to delete data from the database, for that we are going to create a route that will accept 
//the id parameter in the request parameters to delete only a specific post:

//urlRouter.delete('/urls/:id', deleteUrl);

//With CRUD finished, we can now create the api entry file, where we will setup the routes and establish the connection with the database.

module.exports = urlRouter;