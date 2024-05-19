import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import ExploreCategory from "../Components/ExploreCategory";
import Faq from "../Components/Faq";
import Devices from "../Components/Devices";

const Home = () => {
  return (
    <div className="capitalize">
      <NavBar />
      <Hero />
      <ExploreCategory/>
      <Devices/>
      <Faq/>
    </div>
  );
};

export default Home;
