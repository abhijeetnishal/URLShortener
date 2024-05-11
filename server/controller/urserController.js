const userModel = require("../model/userShema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // input validation field
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const user = await userModel.findOne({ email: email });
    if (user) res.status(200).json({ message: "user already present" });
    else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new userModel({
        username,
        email,
        password: hashedPassword,
      });
      await user.save();
      res.status(200).json({ message: "user registered successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({error: 'All fields are required'});
    const userObj = { email, password };
    const user = await userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(userObj, process.env.secret, { expiresIn: "1h" });
      res.json({
        mssg: "user logged successfully",
        token: token,
      });
    } else {
        res.status(404).json({ message: "user not present" });
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
