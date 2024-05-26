const userModel = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dbConnect = require("../config/dbConnect");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Connect to the database
    await dbConnect();

    const existingUser = await userModel.findOne({ email });

    // Check if user already exists
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Generate JWT token for the new user
    const userObj = { id: savedUser._id };
    const token = jwt.sign(userObj, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "User registered successfully",
      token: token, // Send the token in the response
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Connect to the database
    await dbConnect();

    const user = await userModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Generate JWT token for the user
    const userObj = { id: user._id };
    const token = jwt.sign(userObj, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
};
