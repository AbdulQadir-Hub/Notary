import React from "react";
import "./Styles/Testimonials.css";
import BookAppointment from "./BookAppointment";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div class="testimonial-section">
        <div class="content">
          <h1>Happy Customers</h1>
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
            cupiditate deserunt.
          </p>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_2.jpg"
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

        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_1.jpg"
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

        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_3.jpg"
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
        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_2.jpg"
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

        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_1.jpg"
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

        <div className="testimonial-card">
          <div className="customer-image">
            <img
              src="https://preview.colorlib.com/theme/notary/images/person_3.jpg"
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
      <BookAppointment />
    </div>
  );
};

export default Testimonials;
