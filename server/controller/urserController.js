const userModel = require("../model/userShema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (user) res.send("User already exist");
    else {
      const user = new userModel({
        username,
        email,
        password: hashedPassword,
      });
      await user.save();
      res.send("user registered successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userObj = { email, password };
    const user = await userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(userObj, process.env.secret, { expiresIn: "1h" });
      res.json({
        mssg: "user logged successfully",
        token: token,
      });
    } else {
      res.send("user not present");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
};
