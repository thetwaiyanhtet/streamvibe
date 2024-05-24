import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MiniSlider = () => {
  return (
    <div>
      <div className=" p-3 rounded-lg flex items-center gap-5 border border-glass w-60">
        <div className=" p-3 rounded-md bg-glass cursor-pointer"><FaArrowLeft/></div>
        <div className="flex gap-1">
            <div className="w-5 h-1 rounded-md bg-buttonPrimary"></div>
            <div className="w-5 h-1 rounded-md bg-gray-700"></div>
            <div className="w-5 h-1 rounded-md bg-gray-700"></div>
            <div className="w-5 h-1 rounded-md bg-gray-700"></div>
        </div>
        <div className=" p-3 rounded-md bg-glass cursor-pointer"><FaArrowRight/></div>
      </div>
    </div>
  );
};

export default MiniSlider;
