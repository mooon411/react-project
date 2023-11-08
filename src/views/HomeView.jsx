import React from "react";

import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contacts />
      </Main>
      <Footer />
      {/* <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contacts />
      </Main>
      <Footer /> */}
    </>
  );
};

export default HomeView;
