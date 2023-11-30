// VideoPlayer.js
import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ videoIds }) => {
  const [randomVideoId, setRandomVideoId] = useState(videoIds[0]);

  const getRandomVideoId = () => {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    setRandomVideoId(videoIds[randomIndex]);
  };

  // Call the function when the component mounts to set the initial video
  useEffect(() => {
    getRandomVideoId();
  }, [videoIds]);

  return (
    <div className='bg-indigo-200 h-full'>
        <h2 className='font-vibe flex justify-center text-3xl '>SONG FOR YOUR SIGN :) ENJOYYYY</h2>
    <div className="flex justify-center items-center h-screen ">
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${randomVideoId}?autoplay=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default VideoPlayer;
