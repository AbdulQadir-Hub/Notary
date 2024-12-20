const mongoose = require("mongoose");

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String, 
    required: true,
  },
});

// Create Model
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
