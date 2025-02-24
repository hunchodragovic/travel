import React from "react";
import Hero from "./Hero";

const Home = (props) => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="../../public/Images/12.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        btnText="Travel Plan"
        url="/"
      />
    </>
  );
};

export default Home;
