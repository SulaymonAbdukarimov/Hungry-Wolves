import React from "react";
import About from "./About";
import Banner from "./Banner";
import Hero from "./Hero";
import Join from "./Join";
import Navbar from "./Navbar";
import Rewards from "./Rewards";
import Roadmap from "./Roadmap";
import Sheep from "./Sheep";

function Main(props) {
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
    </>
  );
}

export default Main;
