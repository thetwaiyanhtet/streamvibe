import React,{useState} from 'react'
import movies from '../Assets/movies';
import { PlayNow, Plus, ThumbsUp, Mute, Voulme } from "./Buttons";

const MoviePreview = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const movieList = movies.slice(16, 20);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleNextMovie = () => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movieList.length);
    };
  
    const handlePreviousMovie = () => {
      setCurrentMovieIndex((prevIndex) => (prevIndex - 1 + movieList.length) % movieList.length);
    };

  return (
    <div className="pt-28 md:px-20">
      <div className="relative">
        <div className="mx-auto">
          <div
            className="hover-video-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={movieList[currentMovieIndex].coverImg} alt="..." />
            {isHovered && (
              <iframe
                className="hover-video"
                src={`${movieList[currentMovieIndex].trailerUrl}?autoplay=1&mute=1`}
                title={movieList[currentMovieIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        {!isHovered && (
          <div className="flex flex-col items-center justify-center absolute bottom-20 left-[15%]">
            <h1 className="font-semibold">{movieList[currentMovieIndex].title}</h1>
            <p className="text-tSecondary text-center max-w-screen-lg">{movieList[currentMovieIndex].briefInfo}</p>
            <div className="flex gap-4 mt-5">
              <PlayNow />
              <Plus />
              <ThumbsUp />
              <Voulme />
              <Mute />
            </div>
          </div>
        )}
        {/* <div className="flex justify-between items-center mt-5">
          <div className="p-3 rounded-md bg-glass cursor-pointer" onClick={handlePreviousMovie}>
            <FaArrowLeft />
          </div>
          <div className="flex gap-1">
            {movieList.map((movie, index) => (
              <div
                key={index}
                className={`w-5 h-1 rounded-md ${index === currentMovieIndex ? 'bg-buttonPrimary' : 'bg-gray-700'}`}
              ></div>
            ))}
          </div>
          <div className="p-3 rounded-md bg-glass cursor-pointer" onClick={handleNextMovie}>
            <FaArrowRight />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default MoviePreview
