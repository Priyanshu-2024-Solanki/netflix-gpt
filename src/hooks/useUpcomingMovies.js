import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingVidoes } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingVidoes(data.results));
  };

  useEffect(() => {
    getComingMovies();
  }, []);
}

export default useUpcomingMovies;