import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import MoviesAndShows from "./Pages/MoviesAndShows";

function App() {
  return (
    <div className=" bg-primary text-tBase font-ubuntuSans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies&shows" element={<MoviesAndShows/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
