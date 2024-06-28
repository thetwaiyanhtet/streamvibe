import React from "react";
import Genres from "./Genres";
import PopularTopTen from "./PopularTopTen";
import TrendingNow from "./TrendingMovies";
import NewReleased from "./NewReleasedMovies";
import MustWatchMovies from "./MustWatchMovies";


const Movies = () => {

  return (
    <div className=" relative md:mx-20 border border-glass rounded-lg">
      <div className=" px-3 py-6 space-y-12">
        <div className=" p-3 bg-buttonPrimary rounded-md absolute left-7 -top-5">
          movie
        </div>
        <Genres />
        <PopularTopTen />
        <TrendingNow/>
        <NewReleased />
        <MustWatchMovies />
      </div>
    </div>
  );
};

export default Movies;
