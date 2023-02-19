//import express module
const express = require('express');

//create express app 
const app = express();

//import config file
const config = require('./secureAPIGateway/config');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;

//Some legacy server technologies also include nonfunctional server description data in the HTTP header. 
//To keep our API secure, we’ll unset this to give away less information to potentially malicious actors:
app.disable("x-powered-by");

//import modules
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(helmet());
app.use(rateLimit(config.rate));



app.use(express.json());


const urlRouter = require('./routes/urlRoutes')
app.use(urlRouter);
  
//create a server
app.listen(port, (req, res) => {
    console.log('server listening at port '+ port);
});
