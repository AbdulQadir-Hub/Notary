const express = require("express");
const dotenv = require("dotenv");
const Messages = require("./models/messageSchema");
const Appointment = require("./models/appointmentSchema");
dotenv.config({ path: "./config.env" });
require("./db/conn");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const appointmentRoutes = require("./routes/appointmentRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use(cors());
app.use(cookieParser());

app.use("/appointments", appointmentRoutes);
app.use("/Messages", messageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
