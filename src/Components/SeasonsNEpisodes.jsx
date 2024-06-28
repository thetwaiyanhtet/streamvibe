import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaClock } from "react-icons/fa";
import shows from "../Assets/shows";

const SeasonsNEpisodes = () => {
  const [expandedSeason, setExpandedSeason] = useState({});

  const toggleSeason = (seasonNumber) => {
    setExpandedSeason((prev) => ({
      ...prev,
      [seasonNumber]: !prev[seasonNumber],
    }));
  };
  return (
    <div className=" border rounded-md bg-glass m-5 md:px-10 px-5 py-5 md:w-[900px] ">
      <p className=" md:text-xl text-base">seasons and episodes</p>
      <div className="md:py-5 mt-5 space-y-5">
        <div className=" space-y-7">
          {shows[0].totalSeason.map((season, index) => (
            <div
              key={index}
              className=" md:px-10 px-5 py-5 border rounded-md bg-glass "
            >
              <div className={` flex justify-between items-center ${expandedSeason[season.seasonNumber] ? "mb-5" : ""}`}>
                <div className=" flex space-x-5 items-center">
                  <p className=" text-lg">season {season.seasonNumber}</p>
                  <span className=" text-tSecondary">
                    {season.episodes.length} episodes
                  </span>
                </div>
                <div
                  className=" border rounded-full p-3"
                  onClick={() => toggleSeason(season.seasonNumber)}
                >
                  {expandedSeason[season.seasonNumber] === true ? (
                    <FaArrowUp />
                  ) : (
                    <FaArrowDown />
                  )}
                </div>
              </div>
              {expandedSeason[season.seasonNumber] &&
                season.episodes.map((episode, index) => (
                  <>
                    <hr />
                    <div
                      key={index}
                      className=" md:flex justify-between items-center my-5 py-5 gap-10 hidden"
                    >
                      <div className=" text-2xl">{++index}</div>
                      <div className=" flex items-center gap-5">
                        <img src={episode.coverImg} alt="..." />
                        <div>
                          <div className=" flex items-center justify-between ">
                            <p className=" text-lg">{episode.title}</p>
                            <div className=" flex items-center border rounded-md gap-2 p-2">
                              <FaClock />
                              <p>{episode.duration}</p>
                            </div>
                          </div>
                          <p className=" text-tSecondary py-5">
                            {episode.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      key={index}
                      className="block justify-between items-center my-5 py-5 space-y-5 md:hidden"
                    >
                      <div className=" flex items-center justify-between">
                        <img src={episode.coverImg} alt="..." />
                        <div className=" text-2xl">{++index}</div>
                      </div>
                      <div className=" flex items-center border rounded-md gap-2 p-2 w-20">
                        <FaClock />
                        <p>{episode.duration}</p>
                      </div>
                      <p className=" text-lg">{episode.title}</p>
                      {/* <div className=" flex items-center gap-5">
                        <div>
                          <div className=" flex items-center justify-between ">
                            
                          </div>
                          <p className=" text-tSecondary py-5">
                            {episode.desc}
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonsNEpisodes;
