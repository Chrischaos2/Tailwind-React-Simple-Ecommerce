const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    //check requireed fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "Please fill in all the fields",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be atleast 8 characters",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Regiatration error:", error);

    res.status(500).json({
      message: "Server error during registration",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter your email and password",
      });
    }
    //find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    //compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    //create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error during login",
    });
  }
};
module.exports = { registerUser, loginUser };
