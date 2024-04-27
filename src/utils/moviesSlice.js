import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedVideo: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedVideos: (state, action) => {
      state.topRatedVideo = action.payload;
    },
    addPopularVideos: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingVidoes: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedVideos,
  addPopularVideos,
  addUpcomingVidoes,
} = moviesSlice.actions;

export default moviesSlice.reducer;
