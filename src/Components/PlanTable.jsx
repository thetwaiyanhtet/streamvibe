import React, { useState } from "react";
import subscription from "../Assets/subscription";

const PlanTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <div className="md:px-20 px-5  mt-10">
      <h1 className=" md:text-4xl text-2xl my-3">Compare our plans and find the right one for you</h1>
      <p className="text-tSecondary">
        StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the preferred one for you.
      </p>

      {/* Plan Titles for Mobile View */}
      <div className="flex justify-between items-center border border-bdPrimary p-5 rounded-md my-5 md:hidden">
        {subscription.map((item, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${selectedPlan === item.title ? "border bg-glass rounded-md" : ""}`}
            onClick={() => setSelectedPlan(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {subscription.map((plan, index) => (
          selectedPlan === plan.title && (
            <div key={index} className="mb-10 p-5 border border-bdPrimary rounded-lg">
              <div className="flex justify-end mb-4">
                {plan.title === "Standard" && <span className="p-1 rounded-sm bg-buttonPrimary text-white">Popular</span>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">Price</p>
                  <p className=" text-tSecondary">{plan.pricePerMonth}/ month</p>
                </div>
                <div>
                  <p className="font-bold">Free Trial</p>
                  <p className=" text-tSecondary">{plan.freeTrial} days</p>
                </div>
                <div className="col-span-2">
                  <p className="font-bold">Content</p>
                  <p className=" text-tSecondary">{plan.content}</p>
                </div>
                <div>
                  <p className="font-bold">Devices</p>
                  <p className=" text-tSecondary">watch on {plan.devices} devices simultaneously</p>
                </div>
                <div>
                  <p className="font-bold">Cancel Anytime</p>
                  <p className=" text-tSecondary">{plan.cancelAnytime ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="font-bold">HDR</p>
                  <p className=" text-tSecondary">{plan.hdr ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="font-bold">Dolby Atmos</p>
                  <p className=" text-tSecondary">{plan.dolbyAtmos ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="font-bold">Ad-Free</p>
                  <p className=" text-tSecondary">{plan.adFree ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="font-bold">Offline Viewing</p>
                  <p className=" text-tSecondary">{plan.offlineView ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="font-bold">Family Sharing</p>
                  <p className=" text-tSecondary">{plan.familySharing ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="table-auto w-full border-collapse border border-gray-300 mt-10 rounded-lg">
          <thead className="bg-glass">
            <tr>
              <th className="table-style text-start">Features</th>
              {subscription.map((plan, index) => (
                <th key={index} className="table-style text-start">
                  {plan.title} {plan.title === "Standard" && <span className="p-1 rounded-sm bg-buttonPrimary">Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-style">Price</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.pricePerMonth}/ month</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Content</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.content}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Devices</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">watch on {plan.devices} devices simultaneously</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Free Trial</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.freeTrial} days</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Cancel Anytime</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.cancelAnytime ? "Yes" : "No"}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">HDR</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.hdr ? "Yes" : "No"}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Dolby Atmos</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.dolbyAtmos ? "Yes" : "No"}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Ad-Free</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.adFree ? "Yes" : "No"}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Offline Viewing</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.offlineView ? "Yes" : "No"}</td>
              ))}
            </tr>
            <tr>
              <td className="table-style">Family Sharing</td>
              {subscription.map((plan, index) => (
                <td key={index} className="table-style">{plan.familySharing ? "Yes" : "No"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanTable;
