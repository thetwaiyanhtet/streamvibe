import React from "react";
import movies from "../Assets/movies";
import { FaArrowRight } from 'react-icons/fa';

const CategoryCard = ({ start = 0, count = 4, name = "" }) => {
  return (
    <div className="relative bg-glass md:w-60 min-w-40 md:h-[270px] h-52 p-3 rounded-md border-gray-900 border">
      {/* Background images */}
      <div className="flex flex-wrap gap-1 p-3">
        {movies.slice(start, start + count).map((item, index) => (
          <img
            key={index}
            src={item.coverImg}
            alt="..."
            className="w-[48%] md:h-24 h-16 object-cover rounded-md"
          />
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

export default CategoryCard;
