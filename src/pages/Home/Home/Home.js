import React, { Fragment } from "react";
import Events from "../../../components/Events/Events";
import Features from "../../../components/Features/Features";
import Footer from "../../../components/SharedComponents/Footer/Footer";
import Header from "../../../components/SharedComponents/Header/Header";
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
