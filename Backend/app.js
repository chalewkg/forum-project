

require("dotenv").config();
const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");


// Add console.log statements to print environment variables
console.log('HOST:', process.env.HOST);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);
console.log('DATABASE:', process.env.DATABASE);


//app.use(cors());

// Configure CORS
app.use(cors({
  origin: 'http://www.evngadiforum.com', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

//db connection
const dbconnection = require("./db/dbConfig");

//user middelwear file

const userRoutes = require("./routes/userRoute");

//question middleware
const questionRoutes = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");
//authentication middleware file
// const authMiddleware = require('./middlware/authMiddleware');

//json middleware to extract json data
app.use(express.json());

app.use("/api/users", userRoutes);

//question middelwear??
app.use("/api/questions", questionRoutes);

//answer routes middlewear
app.use("/api/answers", answerRoute);

async function start() {
  try {
    const result = await dbconnection.execute("select 'test' ");
    app.listen(port);

    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
