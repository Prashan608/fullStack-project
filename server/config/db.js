const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const ConnectToDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
    return true;
  } catch (error) {
    console.log("❌ DB Connection Failed:", error.message);
    throw error;
  }
};

module.exports = ConnectToDb;