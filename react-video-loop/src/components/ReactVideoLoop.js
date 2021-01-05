import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import ControlBar from './controlBar';

const ReactVideoLoop = ({ videoSrc }) => {
  const playerRef = React.createRef();
  const [playing, setPlaying] = useState(false);

  const useStateUpdated = (cb, inputs) => {
    const initialStateMount = useRef(false);

    useEffect(() => {
      console.log('running useEffect');
      console.log(`ref: ${initialStateMount.current}`);

      if (initialStateMount.current) {
        cb();
      } else {
        initialStateMount.current = true;
        console.log(`ref: ${initialStateMount.current}`);
      }
    }, inputs);
  };
  const playVideo = () => {
    console.log('running play video');
    console.log(`playing: ${playing}`);

    playing ? playerRef.current.play() : playerRef.current.pause();
  };

  useStateUpdated(playVideo, [playing]);

  useEffect(() => {
    console.log(playerRef.current);
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='video_container'>
      <video
        className='video__source'
        muted
        ref={playerRef}
        src={videoSrc}
      ></video>
      <ControlBar
        playing={playing}
        handlePlayButton={() => {
          setPlaying(!playing);
        }}
      />
    </div>
  );
};

ReactVideoLoop.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default ReactVideoLoop;
