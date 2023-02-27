import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const MovieCount = () => {
  const movieCount = useContext(MovieContext);
  console.log(movieCount);

  return <div>Movie Count: {movieCount.length}</div>;
};

export default MovieCount;
