const express = require("express");
const connectDB = require("./DB/connection");
const { userRouter, noteRouter } = require("./modules/index.router");
const app = express();
app.use(express.json());
require("dotenv").config();
app.use(userRouter, noteRouter);
app.use(express.json());
connectDB();
app.listen(2000 || process.env.PORT, () => {
  console.log("running......");
});
