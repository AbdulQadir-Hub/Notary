import React from "react";
import "./Styles/LegalSolutions.css";

const LegalSolutions = () => {
  return (
    <div className="legal-container">
      {/* Left Section - Image */}
      <div className="legal-image-container">
        <img
          src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" // Replace this with the actual image path
          alt="Legal Solutions"
          className="legal-image"
        />
      </div>

      {/* Middle Section - Text */}
      <div className="legal-text-container">
        <h1 className="legal-heading">
          We Have{" "}
          <span className="legal-highlight">
            Legal
            <br /> Solutions
          </span>
        </h1>
        <p className="legal-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam
          reprehenderit perspiciatis iste culpa consequuntur eum, voluptatem,
          quod deserunt maiores?
        </p>
        <p className="legal-paragraph">
          Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam
          facere aperiam iste nam molestias provident consectetur molestiae
          voluptatibus ipsum. Fugit, quas.
        </p>
        <ul className="legal-list">
          <li>Aperiam iste nam molestias</li>
          <li>Modi perferendis ipsa</li>
          <li>Perspic iste culpa</li>
        </ul>
      </div>

      {/* Right Section - FAQ */}
      <div className="legal-faq-container">
        <div className="legal-faq-item">
          <h3 className="legal-faq-question">How to download and register?</h3>
          <p className="legal-faq-answer">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch.
          </p>
        </div>
        <button className="legal-faq-button">
          How to create your PayPal account?
        </button>
        <button className="legal-faq-button">
          How to link your PayPal and bank account?
        </button>
      </div>
    </div>
  );
};

export default LegalSolutions;
