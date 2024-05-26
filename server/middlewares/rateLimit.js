const redisClient = require("../config/redis");

const rateLimit = async (req, res, next) => {
  const ip = req.connection.remoteAddress;
  const redisData = await redisClient
    .multi()
    .incr(ip)
    .expire(ip, process.env.EXPIRATION_TIME)
    .exec();

  const hitsCountByIP = redisData[0][1];

  if (hitsCountByIP > process.env.HITS_COUNT_LIMIT) {
    res.status(429).json({ status: "Failed", message: "Limit Exceeded" });
  } else next();
};

module.exports = rateLimit;
