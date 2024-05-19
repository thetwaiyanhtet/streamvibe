import React from "react";
import { FaPlay } from "react-icons/fa";

export const WButton = () => {
  return (
    <div>
      <button className=" bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2 mx-auto">
        <FaPlay />
        <p>Start Watching Now</p>
      </button>
    </div>
  );
};

export const QButton = () => {
  return (
    <div>
      <button className=" bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2 mx-auto">
        <p>Ask a Question</p>
      </button>
    </div>
  );
};
