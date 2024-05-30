const https = require("node:https");

const VALID_STATUS_CODES = new Set(
  [...Array.from({ length: 100 }, (_, i) => 200 + i), // 2xx codes
  ...Array.from({ length: 100 }, (_, i) => 300 + i), // 3xx codes
  999 ]
);

async function checkWebsite(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await new Promise((resolve, reject) => {
        const options = {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        };
        https
          .get(url, options, (res) => {
            resolve(res);
          })
          .on("error", (e) => {
            reject(e);
          });
      });

      // Check if status code is in the set of valid status codes
      if (VALID_STATUS_CODES.has(response.statusCode)) {
        return true;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // If all retries fail or status code is not valid
  return false;
}

const isValidURL = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: "URL is missing",
      });
    }
    const check = await checkWebsite(originalUrl);

    if (check) {
      next();
    } else {
      return res.status(400).json({
        message: "url is not valid",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = isValidURL;
