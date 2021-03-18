import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '450',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <YouTube videoId={videoId} opts={opts} />
    </>
  );
};

export default VideoPlayer;
