import React, { useState, useEffect } from 'react';

import { FiPlay, FiPause } from 'react-icons/fi';

const ControlBar = ({ playing, handlePlayButton, showControls }) => {
  return (
    <div className={`controlbar ${showControls ? 'hovered' : ''}`}>
      <div className='controlbar__playbutton ' onClick={handlePlayButton}>
        {playing ? <FiPause /> : <FiPlay />}
      </div>
    </div>
  );
};

export default ControlBar;
