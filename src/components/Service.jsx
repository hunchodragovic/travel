import React from "react";
import Hero from "./Hero";
import Services from "./Services";
const Service = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../public/Images/night.jpg"
        title="Service"
        btnClass="hide"
      />
      <Services />
    </>
  );
};

export default Service;
