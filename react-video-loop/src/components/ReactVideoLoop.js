import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import ControlBar from './controlBar';

const ReactVideoLoop = ({ videoSrc }) => {
  const playerRef = useRef();

  const [playing, setPlaying] = useState(false);
  const [inMark, setInmark] = useState(10);
  const [showControls, setShowControls] = useState(true);

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
    playing ? playerRef.current.play() : playerRef.current.pause();
  };

  useStateUpdated(playVideo, [playing]);

  useEffect(() => {
    console.log(playerRef);

    if (playing) {
      const interval = setInterval(() => {
        console.log(playerRef.current.currentTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  useEffect(() => {
    playerRef.current.currentTime = inMark;
  }, []);

  return (
    <div
      className='video_container'
      onMouseEnter={(event) => {
        setShowControls(true);
      }}
      onMouseLeave={(event) => {
        setShowControls(false);
      }}
    >
      <video
        className='video__source'
        muted
        ref={playerRef}
        src={videoSrc}
      ></video>
      <ControlBar
        showControls={showControls}
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
