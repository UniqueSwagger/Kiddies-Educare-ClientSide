import React, { Fragment } from "react";
import Events from "../Events/Events";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Features />
      <Events />
      <Gallery />
    </Fragment>
  );
};

export default Home;
