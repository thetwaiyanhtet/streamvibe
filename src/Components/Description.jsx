import React from "react";
import movies from "../Assets/movies";

const Description = () => {
  return (
    <div>
      <div className=" bg-glass border p-10 m-5 rounded-md space-y-3">
        <h4>description</h4>
        <p>{movies[16].briefInfo}</p>
      </div>
    </div>
  );
};

export default Description;
