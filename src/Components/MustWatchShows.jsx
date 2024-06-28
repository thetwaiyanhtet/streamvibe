import React from "react";
import MiniSlider from "./MiniSlider";
import shows from "../Assets/shows";
import { FaEye, FaClock, FaStar } from "react-icons/fa";
import SlideBar from "./SlideBar";

const MustWatchMovieCard = () => {
  const showsList = shows.slice(8, 12);
  return (
    <div>
      <div className=" flex overflow-x-scroll hide-scrollbar md:grid grid-cols-4 gap-5">
        {showsList.map((item, index) => (
          <div
            key={index}
            className=" w-[305px] flex flex-col justify-center rounded-lg border border-glass p-4 gap-5"
          >
            <img src={item.coverImg} alt="..." className=" cursor-pointer" />
            <div className=" flex items-center justify-between">
              <p className=" rounded-2xl w-24 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
                <FaClock />
                {item.duration}
              </p>
              <p className=" rounded-2xl w-14 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
                <FaStar color="red" />
                {item.totalView}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MustWatchShows = () => {
  return (
    <div>
      <div className=" px-3 space-y-10">
        <div className=" flex justify-between items-center mb-7">
          <h1>must - watch shows</h1>
          <div className="md:flex hidden">
            <MiniSlider />
          </div>
        </div>
        <MustWatchMovieCard />
        <div className="flex justify-center md:hidden">
          <SlideBar/>
        </div>
      </div>
    </div>
  );
};

export default MustWatchShows;
