import React from "react";
import CategoryCard from "./CategoryCard";

const ExploreCategory = () => {
  return (
    <div className="p-5 md:px-20 md:mt-0 mt-44">
      <div className="mb-5">
        <h1>Explore our wide variety of categories</h1>
        <p>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new.
        </p>
      </div>
      <div className="flex justify-between my-10 overflow flex-wrap overflow-hidden gap-2">
        <CategoryCard start={0} name="Action" />
        <CategoryCard start={4} name="Comedy" />
        <CategoryCard start={8} name="Drama" />
        <CategoryCard start={12} name="Documentary" />
        <CategoryCard start={16} name="Thriller" />
      </div>
    </div>
  );
};

export default ExploreCategory;
