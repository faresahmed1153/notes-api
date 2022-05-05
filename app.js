const express = require("express");
const connectDB = require("./DB/connection");
const { userRouter, noteRouter } = require("./modules/index.router");
const app = express();
/* app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin",
    "http://localhost:3000"
  );
  next();
}); */
const cors = require("cors");

app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use(userRouter, noteRouter);
connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log("running......");
});
