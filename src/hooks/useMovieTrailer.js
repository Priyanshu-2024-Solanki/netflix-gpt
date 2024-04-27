import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (trailerId) => {
    const dispatch = useDispatch();
    const getMoreVideos = async () => {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            trailerId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const data = await res.json();
        const trailer = data.results.filter((d) => d.name === "Official Trailer");
        dispatch(addTrailerVideo(trailer));
      };
    
    
      useEffect(() => {
        getMoreVideos();
      }, []);
    
}

export default useMovieTrailer;