import React from "react";
import PropTypes from "prop-types";
import NextSvg from "./Next";
import PauseSvg from "./Pause";
import PlaySvg from "./Play";
import PrevSvg from "./Prev";

function AudioControl({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className="w-full items-center flex justify-center">
      {/* Bouton prev */}
      <button
        type="button"
        className="prevBut"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <PrevSvg />
      </button>

      {/* Bouton play/pause selon l'état de isPlaying */}

      {isPlaying ? (
        <button
          type="button"
          className="pauseBut"
          aria-label="Pause"
          onClick={() => onPlayPauseClick(false)}
        >
          <PauseSvg />
        </button>
      ) : (
        <button
          type="button"
          className="playBut"
          aria-label="Play"
          onClick={() => onPlayPauseClick(true)}
        >
          <PlaySvg />
        </button>
      )}

      {/* Bouton next */}
      <button
        type="button"
        className="nextBut"
        aria-label="Next"
        onClick={onNextClick}
      >
        <NextSvg />
      </button>
    </div>
  );
}

export default AudioControl;

AudioControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
