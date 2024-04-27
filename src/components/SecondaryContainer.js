import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedMovies from "../hooks/useTopRated";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  if (
    movies === null ||
    movies.nowPlayingMovies === null ||
    movies.upcomingMovies === null ||
    movies.popularMovies === null
  )
    return;
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedVideo} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
