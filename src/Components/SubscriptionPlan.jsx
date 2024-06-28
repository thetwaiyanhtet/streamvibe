import React,{useState} from "react";
import plans from "../Assets/subscription";
import { ChoosePlan, FreeTrial } from "./Buttons";

const SubscriptionPlan = () => {
  const [plan, setPlan] = useState("month");

  return (
    <div className=" p-5 md:px-20 md:h-screen">
      <div className=" md:flex items-end justify-between my-10 space-y-5 md:space-y-0">
      <div>
      <h1 className="md:text-3xl text-base">choose the plan that's right for you</h1>
      <p className=" text-tSecondary max-w-screen-lg">
        join StreamVibe and select from our felxiable subscription options
        tailored to suit viewing preferences.get ready for non-stop
        entertainment!
      </p>
      </div>
      <div className="flex border-bdPrimary border w-48 h-16 p-2 rounded-md">
        <div className={` px-4 py-3 cursor-pointer ${plan === "month" ? "bg-glass rounded-md duration-200" : ""}`} onClick={()=> setPlan("month")}>monthly</div>
        <div className={` px-4 py-3 cursor-pointer ${plan === "year" ? "bg-glass rounded-md duration-200" : ""}`} onClick={()=> setPlan("year")}>yearly</div>
      </div>
      </div>
      <div className=" grid md:grid-cols-3 w-full gap-5">
        {plans.map((item, index) => (
          <div
            key={index}
            className=" border border-bdPrimary bg-glass rounded-md px-10 py-5"
          >
            <h1 className=" md:text-3xl text-xl font-semibold">{item.title} plan</h1>
            <p className=" text-tSecondary md:text-base text-sm">{item.detail}</p>
            {plan === "month" && (<h1 className=" text-xl md:text-3xl font-semibold">
              {item.pricePerMonth}/ <sub className=" text-tSecondary">month</sub>
            </h1>)}
            {plan === "year" && (<h1 className=" text-xl md:text-3xl font-semibold">
              {item.pricePerYear}/ <sub className=" text-tSecondary">year</sub>
            </h1>)}
            <div className=" flex gap-3 md:text-base text-sm">
              <FreeTrial />
              <ChoosePlan />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
