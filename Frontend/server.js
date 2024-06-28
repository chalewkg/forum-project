// const express = require("express");
// const path = require("path");

// // Create an express app
// const app = express();

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // Redirect all requests to the index.html file
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

// // Listen on port 3000
// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
//import express amd the path module
const express = require("express");
const path = require("path");
//create an express app
const app = express();
//serve the static files from the react app
app.use(express.static(path.join(__dirname, "build")));
//redirect the request to the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
<<<<<<< HEAD
//});
// Listen on port 3000
//const PORT = process.env.PORT || 5500;

//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
//});
=======
}); //listen to the port 80
app.listen(80);
>>>>>>> c1aa0da45596e4fb090710b444548aac3a2d267b
