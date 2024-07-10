import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import MoviePreview from "../Components/MoviePreview";
import Description from "../Components/Description";
import Casts from "../Components/Casts";
import Reviews from "../Components/Reviews";
import Info from "../Components/Info";
import FreeTrial from "../Components/FreeTrial";
import movies from "../Assets/movies";
import PreviewScreen from "../Components/PreviewScreen";

const MoviePage = () => {
  const movieList = movies.slice(16, 20);
  return (
    <div>
      <NavBar />
      {/* <MoviePreview /> */}
      <PreviewScreen data={movieList} />
      <div className="p-5 md:px-20 flex md:flex-row flex-col md:space-x-5 space-x-0 md:space-y-0 space-y-5 ">
        <Info />
        <div className="md:flex flex-col space-y-5">
          <Description />
          <Casts />
          <Reviews />
        </div>
      </div>
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default MoviePage;
