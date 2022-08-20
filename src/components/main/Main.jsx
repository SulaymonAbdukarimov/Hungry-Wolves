import React from "react";
import About from "./About";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import Join from "./Join";
import { Navbar } from "./Navbar";
import Rewards from "./Rewards";
import Roadmap from "./Roadmap";
import Sheep from "./Sheep";
import Team from "./Team";

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Join />
      <Sheep />
      <Rewards />
      <Banner />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default Main;
