import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-2 text-white">
      <h1 className="text-3xl p-2">{title}</h1>
     <div className="flex overflow-x-scroll scrollbar-hidden">
      <div className="flex">
        {movies.map((movie) => <MovieCard key={movie.id} imageURL={movie.poster_path}/>)}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
