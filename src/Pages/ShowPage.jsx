import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import PreviewScreen from "../Components/PreviewScreen";
import shows from "../Assets/shows";
import Info from "../Components/Info";
import Description from "../Components/Description";
import Casts from "../Components/Casts";
import Reviews from "../Components/Reviews";
import SeasonsNEpisodes from "../Components/SeasonsNEpisodes";
import FreeTrial from "../Components/FreeTrial";

const ShowPage = () => {
  const showList = shows.slice(0, 4);
  return (
    <div>
      <NavBar />
      <PreviewScreen data={showList} />
      <div className="md:mx-20">
        <div className=" md:flex justify-between mb-5">
          <SeasonsNEpisodes />
          <Info />
        </div>
        <div className="md:flex flex-col space-y-5">
          <Description />
          <Casts />
          <Reviews />
        </div>
      </div>
      <FreeTrial/>
      <Footer />
    </div>
  );
};

export default ShowPage;
