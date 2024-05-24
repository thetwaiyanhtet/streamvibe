import React from "react";
import { FreeTrialRed } from "./Buttons";
import bg from '../Assets/freetrialbanner.png';

const FreeTrial = () => {
  return (
    <div className="p-5 md:px-20 mb-20">
      <div className="flex md:flex-row flex-col items-center md:text-start text-center justify-between md:p-20 px-3 py-10 relative" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px'}}>
        <div className=" md:mb-0 mb-7">
          <h1>Start your free trial today!</h1>
          <p className=" text-tSecondary">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <div>
          <FreeTrialRed />
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
