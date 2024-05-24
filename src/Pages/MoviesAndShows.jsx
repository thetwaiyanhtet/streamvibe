import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import MSHero from '../Components/MSHero';
import TrendingNow from '../Components/TrendingNow';


const MoviesAndShows = () => {
  return (
    <div className="capitalize">
      <NavBar/>
      <MSHero/>
      <TrendingNow/>
      <Footer/>
    </div>
  )
}

export default MoviesAndShows
