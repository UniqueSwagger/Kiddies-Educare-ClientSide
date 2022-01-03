import React, { Fragment } from "react";
import Events from "../Events/Events";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Features />
      <Events />
    </Fragment>
  );
};

export default Home;
