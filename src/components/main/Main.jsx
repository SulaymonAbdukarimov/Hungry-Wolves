import React from "react";
import About from "./About";
import Hero from "./Hero";
import Join from "./Join";
import Navbar from "./Navbar";
import Rewards from "./Rewards";
import Sheep from "./Sheep";

function Main(props) {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Join />
      <Sheep />
      <Rewards/>
    </>
  );
}

export default Main;
