## For secure API Gateway:

### 1. CORS
* Because we’re using our API gateway as the layer between the front-end and back-end services, we’ll handle our cross-origin       resource sharing (CORS) here. 
* CORS is a browser-based security mechanism that ensures that the back end will accept certain cross-origin resource requests (for example, requests from www.company.com to api.company.com). 

* To achieve this, we make a special request before the primary request. 
This request uses the OPTION HTTP verb and expects special headers in the response to allow or forbid the subsequent requests.

* To enable CORS in our gateway, we can install the cors package. At this point, we can also add more security 
headers using a helpful package called helmet. We can install both packages using the code below:
npm install cors helmet --save

* This configuration allows all domains to access the API. 
    ```js
    const cors = require("cors");
    const helmet = require("helmet");

    app.use(cors());
    app.use(helmet());   
    ```

### 2. Rate Limiting
* Rate limiting ensures that your API can only be accessed a certain number of times within a specified time interval. 
* This protects it from bandwidth exhaustion due to organic traffic and DoS attacks.
* You can configure rate limits to apply to traffic originating from specific sources, 
and there are many different ways to calculate and enforce the time window within which requests will be processed.
* First, we need to install a rate limiting package:
npm install express-rate-limit --save
 
    ```js
    const rateLimit = require("express-rate-limit");

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 5, // 5 calls
        })
    );
     
    ```
* Make sure to insert this code in the index.js file before any routes you want limited
* Now we can test this by restarting the server using the node index.js command and hitting our initial endpoint several times. 
* Once you’ve hit the five-request limit within a 15-minute timeframe, you should see a message that says, “Too many requests, please try again later.” By default, express-rate-limit also sends back the correct 429 (Too Many Requests) HTTP status code.


### 3. Logging
* To establish logging, we can use winston, which also comes with dedicated middleware for Express: express-winston. 
* Furthermore, we may want to log the response times of the endpoints for closer inspection later. 

* One helpful package for this is response-time. Let’s install these packages.
   npm install winston express-winston response-time --save

* Add the following code to index.js before any code you want logged — so it’s best to insert it before the rate limiting code

    ```js
    const winston = require("winston");
    const expressWinston = require("express-winston");
    const responseTime = require("response-time");

    app.use(responseTime());

    app.use(
    expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.json(),
        statusLevels: true,
        meta: false,
        msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
        expressFormat: true,
        ignoreRoute() {
        return false;
        },
    })
    );

    ```


### Proxing
* An API gateway primarily forwards requests to other dedicated microservices to route business logic requests and 
other HTTP requests, so we need a package to handle this forwarding: a proxy. 
* We’ll use http-proxy-middleware, which you can install using the code below:
npm install http-proxy-middleware --save
* You can test this by starting your server and accessing /search?q=x&format=json, which returns the results 
obtained from proxying the request to http://api.duckduckgo.com/.
    ```js
    const { createProxyMiddleware } = require("http-proxy-middleware");

    app.use(
    "/search",
    createProxyMiddleware({
        target: "http://api.duckduckgo.com/",
        changeOrigin: true,
        pathRewrite: {
        [`^/search`]: "",
        },
    })
    );

    ```

### Session
* express-session package uses a cookie to help us to guard endpoints. 
* Users who don’t have a valid session cookie will receive a relevant response containing either the HTTP 401 (Unauthorized) or 403 (Forbidden) status code.

    ```js
    require('dotenv').config()
    const secret = process.env.SESSION_SECRET;

    const session = require('express-session');
    const store = new session.MemoryStore();
    const protect = (req, res, next) => {
    const { authenticated } = req.session;

    if (!authenticated) {
        res.sendStatus(401);
    } else {
        next();
    }
    };

    app.use(
    session({
        secret,
        resave: false,
        saveUninitialized: true,
        store,
    })
    );
    ```
* With this setup, we get memory-based session handling that you can use to assert endpoints.
* Let’s use it with a new endpoint and provide some dedicated endpoints for login and logout.

    ```js
    app.get("/login", (req, res) => {
        const { authenticated } = req.session;
    
        if (!authenticated) {
        req.session.authenticated = true;
        res.send("Successfully authenticated");
        } else {
        res.send("Already authenticated");
        }
    });
    
    app.get("/logout", protect, (req, res) => {
        req.session.destroy(() => {
        res.send("Successfully logged out");
        });
    });
    
    app.get("/protected", protect, (req, res) => {
        const { name = "user" } = req.query;
        res.send(`Hello ${name}!`);
    });
    ```

*  ### Final index.js file:
    ```js
    //import express module
    const express = require('express');

    //create express app 
    const app = express();

    //import config file
    const config = require('./secureAPIGateway/config');
    const port = config.serverPort;
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

    app.get("/login", (req, res) => {
    const { authenticated } = req.session;

    if (!authenticated) {
        req.session.authenticated = true;
        res.send("Successfully authenticated");
    } else {
        res.send("Already authenticated");
    }
    });

    Object.keys(config.proxies).forEach((path) => {
        const { protected, ...options } = config.proxies[path];
        const check = protected ? protect : alwaysAllow;
        app.use(path, check, createProxyMiddleware(options));
    });
    
    app.get("/logout", protect, (req, res) => {
        req.session.destroy(() => {
        res.send("Successfully logged out");
        });
    });



    //create a server
    app.listen(port, (req, res) => {
        console.log('server listening at port 5000');
    });

    //This code is already quite flexible, but uses standard HTTP instead of HTTPS. In many cases, this might be sufficient. 
    //For example, in Kubernetes, the code might be behind an NGINX ingress, which handles TLS and is responsible for the certificate.
    //However, sometimes we might want to expose the running code directly to the internet. In this case, we would need a valid certificate.
    //visit: https://snyk.io/blog/how-to-build-secure-api-gateway-node-js/#:~:text=%2F%2F%20import%20all%20the%20required,)%3B%20const%20%7B%20createProxyMiddleware%20%7D%20%3D

    ```


## Database:

* Use redis-om to create connection to redis and perform CRUD.

    ```js
    //install redis-om using npm to use redis db. 
    const url = process.env.URL;
    const { Client } = require('redis-om');

    const client = new Client();

    if(client.open(url))
        console.log('Connected to Redis DB');
    else    
        console.log('error connecting Redis DB');

    module.exports = client;

    ```


## To Validate Url Links
* We now have a schema in place that allows us to receive and store URLs in our database. 
* However, URLs entered into the application must be validated. 
* There's a package called valid-url install using command -> npm install valid-url --save
* Add the following code
    ```js
    var validUrl = require('valid-url');

    var url = "http://bla.com"
    if (validUrl.isUri(url)){
        console.log('Looks like an URI');
    } 
    else {
        console.log('Not a URI');
    }
    ```
* The code above uses RegExp to examine and validate any URL passed into our application. 
* Checking if the URL entered is following HTTP protocol if the syntax of a URL domain name and IP address is valid etc.

## Generating a 7-digit unique base 62 encoding string:
* This function uses the crypto module to generate 7 random bytes, which are then converted to a base 62 encoding string using 
   the charset 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz. 
* The resulting string is guaranteed to be 7 characters long, and can represent 62^7 (3.5 * 10^12) possible values.
* Note that you'll need to import the crypto module at the beginning of your code, like this: const crypto = require("crypto");

    ```js
    function generateBase62String() {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const randomValues = crypto.randomBytes(7);
    let result = "";

    for (let i = 0; i < 7; i++) {
        const index = randomValues[i] % 62;
        result += charset.charAt(index);
    }

    return result;
    }
    ```
    


