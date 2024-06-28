import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaPlus, FaStar } from "react-icons/fa";
import movies from "../Assets/movies";

const ReviewCard = () => {
  return (
    <div className=" flex justify-between gap-5 overflow-x-scroll hide-scrollbar">
      {movies[41].review.map((item, index) => (
        <div
          key={index}
          className=" border bg-glass rounded-xl p-5 space-y-5 w-[423px]"
        >
          <div className=" flex justify-between">
            <div className=" space-y-1">
              <h3>{item.userName}</h3>
              <p className=" text-tSecondary">{item.location}</p>
            </div>
            <div className=" flex items-center border rounded-full p-2 gap-2">
              <div className=" flex gap-1">
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <BsStarHalf color="red" />
              </div>
              <p>4.5</p>
            </div>
          </div>
          <p className=" text-tSecondary leading-6">{item.context}</p>
        </div>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <div className="p-10 m-5 border rounded-md">
        <div className=" flex justify-between items-center ">
          <h4 className=" md:text-base text-xl">reviews</h4>
          <p className=" flex gap-3 md:p-3 p-1.5 items-center border rounded-md bg-glass">
            <FaPlus />
            add your review
          </p>
        </div>
        <div className=" flex justify-between my-7">
          <ReviewCard />
        </div>
        <div className="flex gap-1 justify-center">
          <div className="w-5 h-1 rounded-md bg-buttonPrimary"></div>
          <div className="w-5 h-1 rounded-md bg-gray-700"></div>
          <div className="w-5 h-1 rounded-md bg-gray-700"></div>
          <div className="w-5 h-1 rounded-md bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
