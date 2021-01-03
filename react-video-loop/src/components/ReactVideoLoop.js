import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ReactVideoLoop = ({ videoSrc }) => {
  const playerRef = React.createRef();
  const videoPlayer = document.getElementsByClassName('video__source');

  useEffect(() => {
    console.log(videoPlayer);
    console.log(playerRef.current);
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='video_container'>
      <video
        className='video__source'
        controls
        autoPlay
        muted
        ref={playerRef}
        src={videoSrc}
      ></video>
    </div>
  );
};

ReactVideoLoop.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default ReactVideoLoop;
