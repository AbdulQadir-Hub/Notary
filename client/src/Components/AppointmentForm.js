import React, { useState } from "react";
import axios from "axios";
import "./Styles/AppointmentForm.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
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
      const response = await axios.post(
        "http://localhost:3000/appointments",
        formData
      );
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="homepage">
      <div className="content">
        <h1>
          Notary Public & <br />
          Legal Solutions
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Veritatis cupiditate deserunt placeat necessitatibus a.
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Book an Appointment</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
