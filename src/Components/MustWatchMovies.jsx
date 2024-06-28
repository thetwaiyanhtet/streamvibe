import React from "react";
import MiniSlider from "./MiniSlider";
import movies from "../Assets/movies";
import { FaEye, FaClock } from "react-icons/fa";
import SlideBar from "./SlideBar";

const MustWatchMovieCard = () => {
  const movieList = movies.slice(41, 45);
  return (
    <div>
      <div className="flex overflow-x-scroll hide-scrollbar md:grid grid-cols-4 gap-5">
        {movieList.map((item, index) => (
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

const MustWatchMovies = () => {
  return (
    <div>
      <div className=" px-3 space-y-10">
        <div className=" flex justify-between items-center mb-7">
          <h1>must - watch movies</h1>
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

export default MustWatchMovies;
