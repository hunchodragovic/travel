import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../public/Images/2.jpg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </>
  );
};

export default Contact;
