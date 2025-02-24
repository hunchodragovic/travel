import React from "react";
import Hero from "./Hero";
import Destination from "./Destination";
import Trip from "./Trip";
import Footer from "./Footer";

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
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
