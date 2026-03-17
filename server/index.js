const express = require("express");
const cors = require("cors");
require("dotenv").config();

const ConnectToDb = require("./config/db");
const authRouter = require("./routes/auth.routes");

const app = express();

// ✅ Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Allow frontend requests

// ✅ Test Route
app.get("/test", (req, res) => {
  res.status(200).json({ msg: "Test Route is working ✅" });
});

// ✅ Routes
app.use("/auth", authRouter);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

// ✅ Start Server Only After DB Connection
const PORT = process.env.PORT || 5000;

ConnectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server started at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Server not started, DB connection failed:", err.message);
    process.exit(1);
  });
