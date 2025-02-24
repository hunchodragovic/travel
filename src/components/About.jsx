import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

const About = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../public/Images/night.jpg"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
    </>
  );
};

export default About;
