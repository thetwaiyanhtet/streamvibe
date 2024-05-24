import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import ExploreCategory from "../Components/ExploreCategory";
import Faq from "../Components/Faq";
import Devices from "../Components/Devices";
import SubscriptionPlan from "../Components/SubscriptionPlan";
import Footer from "../Components/Footer";
import FreeTrial from "../Components/FreeTrial";

const Home = () => {
  return (
    <div className="capitalize">
      <NavBar />
      <Hero />
      <ExploreCategory/>
      <Devices/>
      <Faq/>
      <SubscriptionPlan/>
      <FreeTrial/>
      <Footer/>
    </div>
  );
};

export default Home;
