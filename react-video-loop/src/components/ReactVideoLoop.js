import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ReactVideoLoop = ({ videoSrc }) => {
  const playerRef = React.createRef();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(playerRef.current);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className='video_container'>
      <iframe
        className='video__source'
        autoPlay
        muted
        src={videoSrc}
        // ref={playerRef}
      />
    </div>
  );
};

ReactVideoLoop.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default ReactVideoLoop;
