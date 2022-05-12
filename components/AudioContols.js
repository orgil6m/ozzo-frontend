import React from "react";
import play from "../Assets/Player/play.svg"
import pause from "../Assets/Player/pause.svg"
import next from "../Assets/Player/next.svg"
import prev from "../Assets/Player/prev.svg"
import shuffle from "../Assets/Player/shuffle.svg"
import loop from "../Assets/Player/loop.svg"
import { motion } from "framer-motion";

const AudioControls = ({ isPlaying,  onPlayPauseClick, onPrevClick, onNextClick }) => {
  return(
    <div className="flex justify-center items-center ">
      <button
        type="button"
        className="shuffle"
        aria-label="shuffle"
        // onClick={shuffle}
      >
        <img className="transition-all duration-200 ease-in-out w-5 scale-75 opacity-50 hover:opacity-80" src={shuffle.src} alt="prev"/>
      </button>
      <button
        type="button"
        className="prev md:mx-10 mx-5"
        aria-label="Previous"
        onClick={onPrevClick}
      >
      <img className="transition-all duration-200 ease-in-out w-4 scale-75 opacity-50 hover:opacity-80" src={prev.src} alt="prev"/>
      </button>
      {isPlaying ? (
          <motion.button
            type="button"
            className="transition-all duration-200 ease-in-out shadow-md rounded-full shadow-sky-500/50 hover:scale-110 "
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
          <img className="w-8" src={pause.src} alt="pauseButton" />
          </motion.button>
      ) : (
       
          <motion.button
            type="button"
            className="transition-all duration-200 ease-in-out shadow-md rounded-full shadow-sky-500/50 hover:scale-110"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
          <img className="w-8" src={play.src} alt="playButton" />
          </motion.button>
      )}
      <button
        type="button"
        className="next md:mx-10 mx-5"
        aria-label="Next"
        onClick={onNextClick}
      >
       <img className="transition-all duration-200 ease-in-out w-4 scale-75 opacity-50 hover:opacity-80" src={next.src} alt="next" />
      </button>
       <button
        type="button"
        className="loop"
        aria-label="loop"
        // onClick={shuffle}
      >
        <img className="transition-all duration-200 ease-in-out w-5 scale-75 opacity-50 hover:opacity-80" src={loop.src} alt="prev"/>
      </button>
    </div>
  )
}

export default AudioControls;
