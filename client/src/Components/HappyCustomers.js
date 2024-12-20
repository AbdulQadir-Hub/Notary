import React from "react";
import "./Styles/HappyCustomers.css";

const HappyCustomers = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Happy Customers</h2>
      <div className="testimonials">
        {/* First Owner */}
        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_2.jpg" // Replace with Lina's image
              alt="Lina Gold"
            />
          </div>
          <h3 className="customer-name">Lina Gold</h3>
          <p className="customer-title">Owner, Ford</p>
          <p className="customer-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
          </p>
        </div>

        {/* Second Owner */}
        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_1.jpg" // Replace with Mike's image
              alt="Mike Fisher"
            />
          </div>
          <h3 className="customer-name">Mike Fisher</h3>
          <p className="customer-title">Owner, Ford</p>
          <p className="customer-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
          </p>
        </div>

        {/* Third Owner */}
        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_3.jpg" // Replace with Sheen's image
              alt="Sheen Yu"
            />
          </div>
          <h3 className="customer-name">Sheen Yu</h3>
          <p className="customer-title">Owner, Ford</p>
          <p className="customer-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
