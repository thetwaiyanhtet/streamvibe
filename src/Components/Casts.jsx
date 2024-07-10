import React from "react";
import movies from "../Assets/movies";

const Casts = ({data}) => {
  return (
    <div>
      <div className=" p-5 border rounded-md bg-glass">
        <h4 className=" mb-5">cast</h4>
        <div className=" flex gap-3 hide-scrollbar overflow-x-scroll">
          {movies[41].casts.map((item, index) => (
            <img src={item} alt="..." width={80} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casts;
