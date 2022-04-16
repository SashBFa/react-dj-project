import React from "react";
import { ReactComponent as Play } from "./../images/play.svg";
import { ReactComponent as Pause } from "./../images/pause.svg";
import { ReactComponent as Next } from "./../images/next.svg";
import { ReactComponent as Prev } from "./../images/prev.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="playerAudio__controls">
    <button
      type="button"
      className="playerAudio__prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="playerAudio__pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="playerAudio__play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="playerAudio__next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;
