//import express module
const express = require('express');

//create express app 
const app = express();

//To access data from .env file
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;

//import modules
const cors = require("cors");

app.use(cors())
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});



app.use(express.json());

const urlRouter = require('./routes/urlRoutes')
app.use(urlRouter);
  
app.get('/',(req, res)=>{
  res.status(200).json('server started');
})

//create a server
app.listen(port, (req, res) => {
    console.log('server listening at port '+ port);
});
