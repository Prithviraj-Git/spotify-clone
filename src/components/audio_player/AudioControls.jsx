import React from "react";

import { ReactComponent as PlayIcon } from "../../assets/svg/audio_controls/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/svg/audio_controls/pause.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/audio_controls/previous.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/audio_controls/next.svg";

import "./audio_controls.scss";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <PrevIcon />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <PauseIcon />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <PlayIcon />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <NextIcon />
    </button>
  </div>
);

export default AudioControls;
