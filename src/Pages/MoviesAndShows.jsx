import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import PreviewScreen from "../Components/PreviewScreen";
import Movies from "../Components/Movies";
import Shows from "../Components/Shows";
import FreeTrial from "../Components/FreeTrial";
import movies from "../Assets/movies";

const MoviesAndShows = () => {
  const [type, setType] = useState("movies");

  const movieList = movies.slice(16, 20);

  return (
    <div>
      <NavBar />
      <PreviewScreen data={movieList} />
      <div className=" flex justify-center md:hidden mb-14">
        <div className=" w-60 border rounded-md p-3 flex items-center justify-center">
          <div
            className={`${
              type === "movies" ? " border rounded-md bg-glass " : ""
            }p-3 w-[120px] text-center`}
            onClick={() => setType("movies")}
          >
            movies
          </div>
          <div
            className={`${
              type === "shows" ? " border rounded-md bg-glass " : ""
            }p-3 w-[120px] text-center`}
            onClick={() => setType("shows")}
          >
            shows
          </div>
        </div>
      </div>
      <div className="md:block hidden space-y-24">
        <Movies />
        <Shows />
      </div>
      <div className=" md:hidden block">
        {type === "movies" && <Movies />}
        {type === "shows" && <Shows />}
      </div>
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default MoviesAndShows;
