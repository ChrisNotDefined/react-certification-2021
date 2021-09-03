import React from 'react';
import { VideoFrame } from './VideoPlayer.styles';

const VideoPlayer = ({ videoId }) => {
  return (
    <>
      <VideoFrame
        title="video"
        width="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </>
  );
};

export default VideoPlayer;
