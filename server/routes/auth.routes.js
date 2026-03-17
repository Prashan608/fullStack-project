const express = require("express");
const userModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // ✅ Check existing user
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      return res.status(409).json({ msg: "User already registered" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Save new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ msg: "Registration successful" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
});


// login


authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validation
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // ✅ Check user exists
    const existUser = await userModel.findOne({ email });

    if (!existUser) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, existUser.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { userId: existUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Success Response
    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: existUser._id,
        name: existUser.name,
        email: existUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
});

authRouter.get("/profile", authMiddleware, async (req, res) => {
  res.json({
    msg: "Welcome to protected route ✅",
    userId: req.userId,
  });
});

module.exports = authRouter;
