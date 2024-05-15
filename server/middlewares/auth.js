const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const isAuthenticated = async (req, res, next) => {
  try {
    // Get access token from request header
    const token = req.header("auth-token");

    // Check token exists or not
    if (!token) {
      return res.status(401).json({
        message: "Authentication token is missing",
      });
    } else {
      // Check user is authenticated or not
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      if (decoded) {
        // Attach decoded token payload to req.user
        //req.userId = decoded.id;
        next();
      } else {
        return res.status(401).json({
          message: "Invalid token",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = isAuthenticated;
