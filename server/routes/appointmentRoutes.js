const express = require("express");
const Appointment = require("../models/appointmentSchema");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
    });
    await newAppointment.save();
    res.status(201).json("Appointment booked successfully!");
  } catch (error) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

module.exports = router;
