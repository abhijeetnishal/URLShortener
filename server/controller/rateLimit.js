const redisClient = require("../config/redis");

const rateLimit = async (req, res, next) => {
  const ip = req.connection.remoteAddress;
  const redisData = await redisClient
    .multi()
    .incr(ip)
    .expire(ip, process.env.RATELIMIT_EXPIRE_TIME)
    .exec();
  const hitCountByIP = redisData[0][1];
  if (hitCountByIP > process.env.NO_OF_HITS) {
    res.status(429).json({ status: "Failed", message: "Limit Exceeded" });
  } else next();
};

module.exports = rateLimit;
