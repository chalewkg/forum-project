require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5500;

// CORS configuration
app.use(
  cors({
    origin: "http://www.evngadiforum.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../Frontend/build")));

// API routes
const dbconnection = require("./db/dbConfig");
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoute);

// Catch-all handler to serve the React frontend for any unrecognized routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build", "index.html"));
});

async function start() {
  try {
    await dbconnection.execute("select 'test'");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Database connection established");
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 5500;
// const cors = require("cors");

// app.use(cors());
// //db connection
// const dbconnection = require("./db/dbConfig");

// //user middelwear file

// const userRoutes = require("./routes/userRoute");

// //question middleware
// const questionRoutes = require("./routes/questionRoute");
// const answerRoute = require("./routes/answerRoute");
// //authentication middleware file
// // const authMiddleware = require('./middlware/authMiddleware');

// //json middleware to extract json data
// app.use(express.json());

// app.use("/api/users", userRoutes);

// //question middelwear??
// app.use("/api/questions", questionRoutes);

// //answer routes middlewear
// app.use("/api/answers", answerRoute);

// async function start() {
//   try {
//     const result = await dbconnection.execute("select 'test' ");
//     app.listen(port);

//     console.log("database connection established");
//     console.log(`listening on ${port}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// start();
