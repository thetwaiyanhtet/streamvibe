import React from "react";
import { BsStar, BsStarHalf } from "react-icons/bs";
import { FaCalendar, FaLanguage, FaStar } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import movies from "../Assets/movies";

const languages = ["English", "Hindi", "Tamil", "Telegu", "Kannada"];
const genres = ["Action", "Adventure"];

const selectedMovie = movies[41];

const Info = () => {
  return (
    <div>
      <div className=" p-5 border rounded-md bg-glass space-y-5">
        <div className=" space-y-2">
          <div className=" flex gap-1 info-title">
            <FaCalendar />
            <p>released year</p>
          </div>
          <p>2022</p>
        </div>
        <div className=" space-y-2">
          <div className=" flex gap-1 info-title">
            <FaLanguage />
            <p>available languages</p>
          </div>
          <div className=" flex flex-wrap gap-4">
            {languages.map((item, index) => (
              <div
                key={index}
                className=" border p-1 rounded-md w-auto text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" space-y-2">
          <div className=" flex gap-1 info-title">
            <BsStar />
            <p>ratings</p>
          </div>
          <div className=" flex md:gap-5 gap-3">
            <div className=" border p-3 rounded-md space-y-1">
              <h3>IMDb</h3>
              <div className=" flex md:gap-2 gap-1">
                <div className=" flex md:gap-1">
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <BsStarHalf color="red" />
                </div>
                <p>4.5</p>
              </div>
            </div>
            <div className=" border p-3 rounded-md space-y-1">
              <h3>StreamVibe</h3>
              <div className=" flex gap-2">
                <div className=" flex gap-1">
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <FaStar color="red" />
                  <BsStar />
                </div>
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" space-y-2">
          <div className=" flex gap-1 info-title">
            <PiSquaresFour />
            <p>gernes</p>
          </div>
          <div className=" flex flex-wrap gap-4">
            {genres.map((item, index) => (
              <div
                key={index}
                className=" border p-1 rounded-md w-auto text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
            <p className="info-title">director</p>
            <div className=" flex gap-3 my-3 border p-3 rounded-md ">
                <img src={selectedMovie.director.img} alt="..." />
                <div>
                    <p className=" text-lg">{selectedMovie.director.name}</p>
                    <p className="text-tSecondary">from {selectedMovie.director.country}</p>
                </div>
            </div>
        </div>
        <div>
            <p className="info-title">music</p>
            <div className=" flex gap-3 my-3 border p-3 rounded-md ">
                <img src={selectedMovie.musicProducer.img} alt="..." />
                <div>
                    <p className=" text-lg">{selectedMovie.musicProducer.name}</p>
                    <p className="text-tSecondary">from {selectedMovie.musicProducer.country}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
