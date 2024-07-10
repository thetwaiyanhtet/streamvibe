import React from "react";
import CategoryCard from "./CategoryCard";
import SlideBar from "./SlideBar";

const ExploreCategory = () => {
  return (
    <div className="p-5 md:px-20 md:mt-0 mt-60">
      <div className="mb-5 space-y-3">
        <h1 className=" md:text-4xl text-xl font-semibold">Explore our wide variety of categories</h1>
        <p>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new.
        </p>
      </div>
      <div className="flex md:grid grid-cols-5 my-10 gap-5 overflow-x-scroll hide-scrollbar">
        <CategoryCard start={0} name="Action" />
        <CategoryCard start={4} name="Comedy" />
        <CategoryCard start={8} name="Drama" />
        <CategoryCard start={12} name="Documentary" />
        <CategoryCard start={16} name="Thriller" />
      </div>
      <div className="flex justify-center md:hidden">
          <SlideBar />
        </div>
    </div>
  );
};

export default ExploreCategory;
