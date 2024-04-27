import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const data = useSelector((store) => store.movies.nowPlayingMovies);
    if(data === null) return;
    
    const mainMovie = data[0];
    const {original_title , overview} = mainMovie;
    // console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground trailerId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer
