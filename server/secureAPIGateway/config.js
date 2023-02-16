//Now that we have all the pieces, let’s configure them to work together.
require("dotenv").config();

exports.serverPort = 3000;

exports.sessionSecret = process.env.SESSION_SECRET;

exports.rate = {
  windowMs: 5 * 60 * 1000,
  max: 100,
};

exports.proxies = {
  "/search": {
    protected: true,
    target: "http://api.duckduckgo.com/",
    changeOrigin: true,
    pathRewrite: {
      [`^/search`]: "",
    },
  },
};

//Here, we created the essential configuration of our API gateway. We set its port, cookie session encryption key, and the different endpoints to proxy. 
//The options for each proxy match the options for the createProxyMiddleware function, with the addition of the protected key.
