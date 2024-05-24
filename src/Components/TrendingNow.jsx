import React from "react";
import MiniSlider from "./MiniSlider";
import movies from "../Assets/movies";
import { FaEye, FaClock } from "react-icons/fa";

const TrendingCard = () => {
  const movieList = movies.slice(20, 25);
  return (
    <div>
      <div className=" grid grid-cols-5 gap-5">
        {movieList.map((item, index) => (
          <div key={index} className=" w-60 flex flex-col justify-center rounded-lg border border-glass p-4 gap-5">
            <img src={item.coverImg} alt="..." />
            <div className=" flex items-center justify-between">
            <p className=" rounded-2xl w-24 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
              <FaClock />
              {item.duration}
            </p>
            <p className=" rounded-2xl w-14 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
              <FaEye />
              {item.totalView}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendingNow = () => {
  return (
    <div className=" p-5 md:mx-20 border border-glass rounded-lg">
      <div className=" px-3">
        <div className=" flex justify-between items-center mb-7">
          <h1>trending now</h1>
          <MiniSlider />
        </div>
        <TrendingCard />
      </div>
    </div>
  );
};

export default TrendingNow;
