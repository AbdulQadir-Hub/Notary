const express = require("express");
const Message = require("../models/messageSchema");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newMessage = new Message({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    await newMessage.save();
    res.status(201).json("Message Sent Successfully!");
  } catch (error) {
    res.status(500).json({ error: "Failed to sent Message" });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
