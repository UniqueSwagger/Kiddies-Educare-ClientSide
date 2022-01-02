import React, { Fragment } from "react";
import Events from "../../../components/Events/Events";
import Features from "../../../components/Features/Features";
import Footer from "../../../components/SharedComponents/Footer/Footer";
import Header from "../../../components/SharedComponents/Header/Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <Events />
      <Footer />
    </Fragment>
  );
};

export default Home;
