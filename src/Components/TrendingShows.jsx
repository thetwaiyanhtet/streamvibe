import React from "react";
import MiniSlider from "./MiniSlider";
import { FaClock, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import shows from '../Assets/shows';
import SlideBar from "./SlideBar";

const TrendingShows = () => {
  const showList = shows.slice(0, 4);
  return (
    <div>
      <div className=" px-3 space-y-10">
        <div className=" flex justify-between items-center mb-7">
          <h1>trending shows now</h1>
          <div className="md:flex hidden">
            <MiniSlider />
          </div>
        </div>
        <Link to="/movies&shows/shows">
          <div>
            <div className="flex overflow-x-scroll hide-scrollbar md:grid grid-cols-4 gap-5">
              {showList.map((item, index) => (
                <div
                  key={index}
                  className=" w-[310px] flex flex-col justify-center rounded-lg border border-glass p-4 gap-5"
                >
                  <img
                    src={item.coverImg}
                    alt="..."
                    className=" cursor-pointer"
                  />
                  <div className=" flex items-center justify-between">
                    <p className=" rounded-2xl w-24 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
                      <FaClock />
                      {item.duration}
                    </p>
                    <p className=" rounded-2xl w-24 border border-glass flex items-center justify-around p-1 text-sm text-tSecondary cursor-pointer">
                      <FaFolderOpen />
                      {item.seasons}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>
        <div className="flex justify-center md:hidden">
          <SlideBar/>
        </div>
      </div>
    </div>
  );
};

export default TrendingShows;
