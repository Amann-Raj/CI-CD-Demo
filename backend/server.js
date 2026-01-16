require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // 👈 THIS IS THE FIX

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend updated via CI/CD successfully 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
