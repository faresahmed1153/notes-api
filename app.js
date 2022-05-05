const express = require("express");
const connectDB = require("./DB/connection");
const { userRouter, noteRouter } = require("./modules/index.router");
const app = express();
const cors = require("cors");



app.use(
  cors({
    origin: "https://salty-caverns-11746.herokuapp.com/",
    credentials: true,
  })
);
app.use(express.json());
require("dotenv").config();
app.use(userRouter, noteRouter);
app.use(express.json());
connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log("running......");
});
