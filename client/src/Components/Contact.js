import React, { useState } from "react";
import axios from "axios";
import "./Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post("http://localhost:3000/Messages", formData);
      alert("Message sent successfully");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email address"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Write your message..."
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>
          <strong>Address:</strong> 34 Street Name, City Name Here, United
          States
        </p>
        <p>
          <strong>Phone:</strong> +1 242 4942 290
        </p>
        <p>
          <strong>Email:</strong> info@yourdomain.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
