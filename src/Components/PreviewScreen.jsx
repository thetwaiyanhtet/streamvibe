import React, { useState } from "react";
import { PlayNow, Plus, ThumbsUp, Mute, Voulme } from "./Buttons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PreviewScreen = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  // const movieList = movies.slice(16, 20);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePreviousMovie = () => {
    setCurrentMovieIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  return (
    <div className="md:py-28 py-10 pt-24 mx-5 md:px-20">
      <div className="relative">
        <div className="mx-auto">
          <div
            className="hover-video-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={data[currentMovieIndex].coverImg} alt="..." />
            {isHovered && (
              <iframe
                className="hover-video"
                src={`${data[currentMovieIndex].trailerUrl}?autoplay=1&mute=1`}
                title={data[currentMovieIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        {!isHovered && (
          <div>
            <div className="flex flex-col items-center justify-center mb-5 absolute md:bottom-20 bottom-0 md:left-[13%] left-[25%]">
              <h1 className="font-semibold">
                {data[currentMovieIndex].title}
              </h1>
              <p className="text-tSecondary text-center max-w-screen-lg md:block hidden">
                {data[currentMovieIndex].briefInfo}
              </p>
              <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-5">
                <PlayNow />
                <div className=" md:flex gap-2 hidden">
                  <Plus />
                  <ThumbsUp />
                  <Voulme />
                  <Mute />
                </div>
              </div>
            </div>
            <div className="md:flex hidden justify-between items-center mt-5 absolute md:bottom-10 w-full">
              <div
                className="p-3 ml-7 rounded-md bg-glass cursor-pointer"
                onClick={handlePreviousMovie}
              >
                <FaArrowLeft />
              </div>
              <div className="flex gap-1">
                {data.map((movie, index) => (
                  <div
                    key={index}
                    className={`w-5 h-1 rounded-md ${
                      index === currentMovieIndex
                        ? "bg-buttonPrimary"
                        : "bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
              <div
                className="p-3 mr-7 rounded-md bg-glass cursor-pointer"
                onClick={handleNextMovie}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewScreen;
