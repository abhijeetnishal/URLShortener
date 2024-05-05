//import express module
const express = require("express");

//create express app
const app = express();

//To access data from .env file
const dotenv = require("dotenv");
dotenv.config();

//import modules
const cors = require("cors");

app.use(cors());

app.use(express.json());

//require database connection
const dbConnect = require("./model/dbConnect");

// execute database connection
dbConnect();

const port = process.env.PORT || 8080;

//create a server
app.listen(port, (req, res) => {
  console.log("server listening at port " + port);
});

const urlRouter = require("./routes/urlRoutes");
app.use(urlRouter);
