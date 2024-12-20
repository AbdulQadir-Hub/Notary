const mongoose = require("mongoose");
const conn = process.env.DATABASECONNECTIONSTRING;

mongoose
  .connect(conn, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Database connection error:", e.message);
  });
