const express = require("express");
const connectDB = require("./DB/connection");
const { userRouter, noteRouter } = require("./modules/index.router");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
require("dotenv").config();
app.use(userRouter, noteRouter);
app.use(express.json());
connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log("running......");
});
