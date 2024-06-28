import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import MoviesAndShows from "./Pages/MoviesAndShows";
import MoviePage from "./Pages/MoviePage";
import ShowPage from './Pages/ShowPage'
import SupportPage from "./Pages/SupportPage";
import SubscriptionPage from "./Pages/SubscriptionPage";

function App() {
  return (
    <div className=" bg-primary text-tBase font-ubuntuSans capitalize">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies&shows" element={<MoviesAndShows/>}/>
          <Route path="/movies&shows/movies" element={<MoviePage/>}/>
          <Route path="/movies&shows/shows" element={<ShowPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="/subscriptions" element={<SubscriptionPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
