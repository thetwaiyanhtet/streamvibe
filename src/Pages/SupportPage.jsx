import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FreeTrial from "../Components/FreeTrial";
import Faq from '../Components/Faq'
import ContactSupport from "../Components/ContactSupport";

const SupportPage = () => {
  return (
    <div>
      <NavBar />
      <ContactSupport/>
      <Faq/>
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default SupportPage;
