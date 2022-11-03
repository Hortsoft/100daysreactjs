import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ videoSrcURL } ) => (
    <div className="player-wrapper">
      <ReactPlayer
            className='react-player fixed-bottom'
            url={videoSrcURL}
            width='100%'
            height='100%'
            controls = {true}

            />
    
    </div>

)

export default Video;
