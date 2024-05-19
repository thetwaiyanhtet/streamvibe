import React from "react";
import imagePaths from "../Assets/images";
import { FaArrowRight } from 'react-icons/fa';

const CategoryCard = ({ start = 0, count = 4, name = "" }) => {
  return (
    <div className="relative bg-glass md:w-60 w-40 md:h-[270px] h-52 p-3 rounded-md border-gray-900 border">
      {/* Background images */}
      <div className="flex flex-wrap gap-1 p-3">
        {imagePaths.slice(start, start + count).map((item, index) => (
          <img key={index} src={item} alt="..." className="w-[48%] md:h-24 h-16 object-cover rounded-md" />
        ))}
      </div>
      {/* Glass effect layers */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      {/* category and icon */}
      <div className="absolute bottom-6 left-3 right-3 flex justify-between items-center px-3">
        <p>{name}</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

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
