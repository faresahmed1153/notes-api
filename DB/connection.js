const mongoose = require("mongoose");
const connectDB = () => {
  return mongoose
    .connect(process.env.CONNECTION_STRING)
    .then((result) => {
      console.log("connectedDB..... ");
    })
    .catch((err) => {
      console.log("fail to connect DB.....", err);
    });
};

module.exports = connectDB;
