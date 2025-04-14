import React from "react";
import Hero from "./Hero";
import Services from "./Services";
const Service = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../public/Images/services.jpg"
        title="الخدمات"
        btnClass="hide"
        titleColor="black"
      />
      <Services />
    </>
  );
};

export default Service;
