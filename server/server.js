//import express module
const express = require("express");

const urlRouter = require("./routes/urlRoutes");
const userRouter = require("./routes/userRoutes");

//To access data from .env file
const dotenv = require("dotenv");
dotenv.config();

//import modules
const cors = require("cors");

//create express app
const app = express();
app.use(express.json());

//Define port
const port = process.env.Port || 8080;

// Check environment
const isProduction = process.env.NODE_ENV === "production";

// CORS Configuration
const corsOptions = {
  origin: isProduction ? process.env.CLIENT_PROD_URL : "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

// This will allow the user in the frontend to consume the APIs that you have created without any problem.
app.use(cors(corsOptions));

// Disable X-Powered-By Header
app.disable("x-powered-by");

app.set("trust proxy", true);

//get request when server is live
app.get("/", (req, res) => {
  res.status(200).json("Server is Live");
});

app.use(urlRouter);
app.use(userRouter);

//create a server
app.listen(port, (req, res) => {
  console.log("server listening at port " + port);
});
