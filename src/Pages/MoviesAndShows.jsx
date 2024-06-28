import React,{useState} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import PreviewScreen from "../Components/PreviewScreen";
import Movies from "../Components/Movies";
import Shows from "../Components/Shows";
import FreeTrial from "../Components/FreeTrial";
import movies from '../Assets/movies'

const MoviesAndShows = () => {
  const [type, setType] = useState("movies");

  const movieList = movies.slice(16, 20)

  return (
    <div>
      <NavBar />
      <PreviewScreen data={movieList} />
      <div className=" flex justify-center md:hidden border">
        <div className=" w-60 border rounded-md p-3 flex items-center justify-center">
          <div className={`${type === "movies"? " border rounded-md bg-glass ": ""}p-3 w-[120px] text-center`} >
            movies
          </div>
          <div className={`${type === "shows"? " border rounded-md bg-glass ": ""}p-3 w-[120px] text-center`} >shows</div>
        </div>
      </div>
      <div className=" space-y-24">
        <Movies />
        <Shows />
      </div>
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default MoviesAndShows;
