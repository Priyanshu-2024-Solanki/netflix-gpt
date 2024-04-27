import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ trailerId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo)

  useMovieTrailer(trailerId);

  if (trailer === null) return;
  
  return (
    <div className="w-full">
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailer[0].key+"?autoplay=1&loop=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
