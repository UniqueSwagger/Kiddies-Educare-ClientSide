import React, { Fragment } from "react";
import Footer from "../../../components/SharedComponents/Footer/Footer";
import Header from "../../../components/SharedComponents/Header/Header";
import Events from "../Events/Events";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Features />
      <Events />
      <Footer />
    </Fragment>
  );
};

export default Home;
