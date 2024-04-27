import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-52 pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl">{title}</h1>
      <p className="w-1/3 mt-4 text-lg">{overview}</p>
      <div className="mt-4">
        <button className="bg-gray-300 text-black rounded-lg py-2 px-6 text-xl hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out">
          ▶️ Play
        </button>
        <button className="ml-6 bg-slate-700 text-white rounded-lg py-2 px-6 text-xl hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-in-out">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
