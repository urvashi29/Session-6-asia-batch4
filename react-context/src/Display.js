import React from "react";

const Display = ({ movies }) => {
  console.log(movies);

  const movieList = movies.map((movie) => {
    return (
      <React.Fragment key={movie.id}>
        <p>{movie.name}</p>
      </React.Fragment>
    );
  });

  return <>{movieList}</>;
};

export default Display;
