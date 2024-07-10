import React from "react";

const SlideBar = ({ currentItem, totalItems }) => {
  return (
    <div className="flex ">
      {Array.from({ length: totalItems }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-4 rounded-md ${
            currentItem === index ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SlideBar;
