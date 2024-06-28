import React from "react";
import MiniSlider from "./MiniSlider";
import shows from "../Assets/shows";
import SlideBar from "./SlideBar";

const NewReleasedCard = () => {
  const showList = shows.slice(4, 8);
  return (
    <div>
      <div className=" flex overflow-x-scroll hide-scrollbar md:grid grid-cols-4 gap-5">
        {showList.map((item, index) => (
          <div
            key={index}
            className=" w-[310] flex flex-col justify-center rounded-lg border border-glass p-4 gap-5"
          >
            <img src={item.coverImg} alt="..." className=" cursor-pointer" />
            <p className=" rounded-2xl border border-glass flex items-center justify-center gap-2 p-1 text-sm text-tSecondary cursor-pointer">
              released at
              <span className=" text-white">{item.releasedDate}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewReleasedShows = () => {
  return (
    <div>
      <div className=" px-3 space-y-10">
        <div className=" flex justify-between items-center mb-7">
          <h1>new releases</h1>
          <div className="md:flex hidden">
            <MiniSlider />
          </div>
        </div>
        <NewReleasedCard />
        <div className="flex justify-center md:hidden">
          <SlideBar/>
        </div>
      </div>
    </div>
  );
};

export default NewReleasedShows;
