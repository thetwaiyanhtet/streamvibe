import React from "react";

const SlideBar = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex justify-center bg-gray-700 w-20">
        <div className="w-5 h-1 rounded-md bg-buttonPrimary"></div>
        <div className="w-5 h-1 rounded-md"></div>
        <div className="w-5 h-1 rounded-md"></div>
        <div className="w-5 h-1 rounded-md"></div>
      </div>
    </div>
  );
};

export default SlideBar;
