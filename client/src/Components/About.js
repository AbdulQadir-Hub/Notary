import React from "react";
import "./Styles/About.css";
import BookAppointment from "./BookAppointment";

const About = () => {
  const members = [
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_1.jpg",
    },
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_2.jpg",
    },
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_3.jpg",
    },
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_4.jpg",
    },
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_5.jpg",
    },
    {
      name: "James Doe",
      title: "Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.",
      image: "https://preview.colorlib.com/theme/notary/images/person_1.jpg",
    },
  ];

  return (
    <section className="team-section">
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
      </div>
      <BookAppointment />
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
