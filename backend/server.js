const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
