import React, { useState, useEffect, useRef } from "react";
import debounce from 'lodash/debounce';

import AudioControls from "./AudioControls";

const AudioPlayer = ({ tracks, trackIndex, setTrackIndex}) => {
  // state
  //const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [activeColor, setActiveColor] = useState('#b3b3b3')
  // Destructure props
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
        audioRef.current.play();
        startTimer();
        console.log('playing');
    } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
        console.log('paused');
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  // Handle setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();
    
        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
    
        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);

  // Methods
  const toPrevTrack = () => {
    console.log("goto Prev track");
    if (trackIndex - 1 >= 0) {
        setTrackIndex(trackIndex - 1);
    } else {
        setTrackIndex(0)
    }
  };

  const toNextTrack = () => {
    console.log("goto Next track");
    if (trackIndex < tracks.length - 1) {
        setTrackIndex(trackIndex + 1);
    } else {
        setTrackIndex(0)
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }

  /* Scrubber Methods */

  const onScrub = debounce(value => {
	// Clear any timers already running
  clearInterval(intervalRef.current);
  audioRef.current.currentTime = value;
  setTrackProgress(audioRef.current.currentTime);
  },50);

const onScrubEnd = () => {
  // If not already playing, start
  if (!isPlaying) {
    setIsPlaying(true);
  }
  startTimer();
}

const onUserHover = () => {
   setActiveColor(activeColor == '#b3b3b3' ? '#1db954' : '#b3b3b3')
}

const throttling = (fn, delay) => {
  let flag = true;
  
  return function (...args){
      
     if (flag) {
         fn(...args);
         flag = false;
         setTimeout(()=>{
              flag = true;
         },delay)
     } 

  }
}


const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${activeColor}), color-stop(${currentPercentage}, #777))
`;

  return (
    <div className="audio-player">
      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
      <div className="audio-rangle-slider">
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseEnter={onUserHover}
          onMouseLeave={onUserHover}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
