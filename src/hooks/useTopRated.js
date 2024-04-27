import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRatedVideos(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;