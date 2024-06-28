import React from "react";
import MiniSlider from "./MiniSlider";
import CategoryCard from "./CategoryCard";
import SlideBar from "./SlideBar";

const Genres = () => {
  return (
    <div>
      <div className=" px-3">
        <div className=" flex justify-between items-center mb-7">
          <h1>our genres</h1>
          <div className="md:flex hidden">
            <MiniSlider />
          </div>
        </div>
        <div className="flex justify-between my-10 flex-wrap overflow-hidden gap-2">
          <CategoryCard start={0} name="Action" />
          <CategoryCard start={4} name="Comedy" />
          <CategoryCard start={8} name="Drama" />
          <CategoryCard start={12} name="Horror" />
          <CategoryCard start={16} name="Thriller" />
        </div>
        <div className="flex justify-center md:hidden">
          <SlideBar />
        </div>
      </div>
    </div>
  );
};

export default Genres;
