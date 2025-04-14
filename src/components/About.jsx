import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

const About = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../Images/traveler2.jpg"
        title="من نحن"
        btnClass="hide"
      />
      <AboutUs />
    </>
  );
};

export default About;
