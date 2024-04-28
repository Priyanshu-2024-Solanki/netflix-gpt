import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showSearch = useSelector((store) => store.gpt.showGptSearch);
  // console.log(showSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showSearch ? 
        <GptSearch />
       : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  );
};

export default Browse;
