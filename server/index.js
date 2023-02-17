//import express module
const express = require('express');

//create express app 
const app = express();

//import config file
const config = require('./secureAPIGateway/config');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;
const secret = config.sessionSecret;

//import session
const session = require("express-session");
const store = new session.MemoryStore();

//We’ll add some logic to check the protected property values of the proxies we list in config.js. 
//If they’re set to false, the alwaysAllow function we define here passes control through to the next handler:
const alwaysAllow = (_1, _2, next) => {
    next();
  };
  const protect = (req, res, next) => {
    const { authenticated } = req.session;
  
    if (!authenticated) {
      res.sendStatus(401);
    } else {
      next();
    }
  };

//Some legacy server technologies also include nonfunctional server description data in the HTTP header. 
//To keep our API secure, we’ll unset this to give away less information to potentially malicious actors:
app.disable("x-powered-by");

//import modules
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const expressWinston = require("express-winston");
const { createProxyMiddleware } = require("http-proxy-middleware");
const responseTime = require("response-time");
const winston = require("winston");

app.use(cors());
app.use(helmet());
app.use(responseTime());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.json(),
    statusLevels: true,
    meta: false,
    level: "debug",
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    expressFormat: true,
    ignoreRoute() {
      return false;
    },
  })
);

app.use(rateLimit(config.rate));

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true,
    store,
  })
);

Object.keys(config.proxies).forEach((path) => {
    const { protected, ...options } = config.proxies[path];
    const check = protected ? protect : alwaysAllow;
    app.use(path, check, createProxyMiddleware(options));
  });
//above code for security purpose







app.use(express.json());

const client = require('./model/dbconnect');

const urlRouter = require('./routes/urlRoutes')
app.use(urlRouter);
  
//create a server
app.listen(port, (req, res) => {
    console.log('server listening at port '+ port);
});
