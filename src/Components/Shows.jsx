import React from "react";
import Genres from "./Genres";
import PopularTopTen from "./PopularTopTen";
import NewReleasedShows from "./NewReleasedShows";
import TrendingShows from "./TrendingShows";
import MustWatchShows from "./MustWatchShows";

const Shows = () => {
  return (
    <div className=" relative md:mx-20 border border-glass rounded-lg">
      <div className=" px-3 py-6 space-y-12">
        <div className=" p-3 bg-buttonPrimary rounded-md absolute left-7 -top-5">
          shows
        </div>
        <Genres />
        <PopularTopTen />
        <TrendingShows />
        <NewReleasedShows />
        <MustWatchShows/>
      </div>
    </div>
  );
};

export default Shows;
