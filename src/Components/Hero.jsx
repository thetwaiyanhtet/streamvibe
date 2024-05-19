import React from "react";
import imagePaths from "../Assets/images";
import { WButton } from "./Buttons";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" md:flex hidden flex-wrap gap-2">
        {imagePaths.map((item, index) => (
          <img key={index} src={item} alt="..." className=" w-40 mx-auto" />
        ))}
      </div>
      <div className=" flex flex-wrap gap-2 md:hidden">
        {imagePaths.slice(0, 12).map((item, index) => (
          <img key={index} src={item} alt="..." className=" w-28 mx-auto" />
        ))}
      </div>
      <div className=" w-full h-full bg-gradient-to-b from-gray-600 via-transparent to-primary absolute"></div>
      <div className=" absolute text-center bottom-12">
        <h1>the best streaming experience</h1>
        <p className=" max-w-screen-xl mb-4 md:line-clamp-none line-clamp-3 leading-6">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <WButton />
      </div>
    </div>
  );
};

export default Hero;
