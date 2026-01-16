require("dotenv").config();

const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend deployed via CI/CD" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
