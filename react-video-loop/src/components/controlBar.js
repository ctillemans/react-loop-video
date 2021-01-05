import React, { useState, useEffect } from 'react';

const ControlBar = ({ playing, handlePlayButton }) => {
  return (
    <div className='controlbar'>
      <div className='controlbar__playbutton' onClick={handlePlayButton}>
        <h1>{playing ? '||' : '>'}</h1>
      </div>
    </div>
  );
};

export default ControlBar;
