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
        heroImg="../../Images/12.jpg"
        title="رحلتك... هي حكايتك"
        text=".اختر وجهتك المفضلة"
        btnClass="show"
        btnText="خطة السـفـر"
        url="/"
      />
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
