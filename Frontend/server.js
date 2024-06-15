const express = require("express");
const path = require("path");

// Create an express app
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Redirect all requests to the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Listen on port 80
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});