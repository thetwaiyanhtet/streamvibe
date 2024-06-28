import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FreeTrial from "../Components/FreeTrial";
import SubscriptionPlan from "../Components/SubscriptionPlan";
import PlanTable from "../Components/PlanTable";

const SubscriptionPage = () => {
  return (
    <div>
      <NavBar />
      <div className=" pt-20">
        <SubscriptionPlan />
      </div>
      <PlanTable />
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
