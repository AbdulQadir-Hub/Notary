import React from "react";
import { Link } from "react-router-dom";
import "./Styles/bookAppointment.css";

const BookAppointment = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ flex: "1", display: "flex", gap: "20px" }}>
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg"
          alt="Professional"
          style={{ width: "250px", borderRadius: "10px" }}
        />
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
          alt="Lawyer"
          style={{ width: "250px", borderRadius: "10px" }}
        />
      </div>
      <div style={{ flex: "1", paddingLeft: "20px" }}>
        <h1>
          We Provide Highly <strong>Reliable</strong> & <br />
          <strong>Effective</strong> Legal Solutions
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Repudiandae, explicabo iste a <br />
          labore id est quas, doloremque veritatis!
          <br /> Provident odit pariatur dolorem quisquam.
          <br />
          voluptatibus voluptates optio accusamus, vel quasi quidem!
          <br />
        </p>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#fbbd08",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
