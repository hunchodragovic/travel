import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="../../Images/river.jpg"
        title="إتصل بنا"
        btnClass="hide"
      />
      <ContactForm />
    </>
  );
};

export default Contact;
