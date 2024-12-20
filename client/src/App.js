import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/About" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
