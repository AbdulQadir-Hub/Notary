import React from "react";
import "./Styles/PracticeAreas.css";

const PracticeAreas = () => {
  const areas = [
    {
      title: "Bankruptcy Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
      
    },
    {
      title: "Business Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
      
    },
    {
      title: "Civil Rights Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
      
    },
    {
      title: "Criminal Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
      
    },
    {
      title: "Immigration Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
     
    },
    {
      title: "Family Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!",
      
    },
  ];

  return (
    <section className="practice-areas">
      <h2 className="practice-title">Practice Areas</h2>
      <p className="practice-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="practice-cards">
        {areas.map((area, index) => (
          <div className="practice-card" key={index}>
            <div className="practice-icon">{area.icon}</div>
            <h3 className="practice-card-title">{area.title}</h3>
            <p className="practice-card-description">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
