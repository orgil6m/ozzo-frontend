/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, ReactDOM } from "react";
import AudioControls from "./AudioContols";
import volume0 from "../Assets/Player/volume0.svg";
import volume1 from "../Assets/Player/volume1.svg";
import volume2 from "../Assets/Player/volume2.svg";
import volume3 from "../Assets/Player/volume3.svg";
import { secondFormat } from "../utils/format";

const Audioplayer = ({
  data,
  audioIndex,
  setAudioIndex,
  userCover,
  artist,
}) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(data[audioIndex].src));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  audioRef.current.volume = volume / 100;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
        startTimer();
        setTrackProgress(duration);
        clearInterval(intervalRef.current);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };
  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  const toPrevTrack = () => {
    if (audioIndex - 1 < 0) {
      setAudioIndex(data.length - 1);
    } else {
      setAudioIndex(audioIndex - 1);
    }
  };
  const toNextTrack = () => {
    if (audioIndex < data.length - 1) {
      setAudioIndex(audioIndex + 1);
    } else {
      setAudioIndex(0);
    }
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(data[audioIndex].src);
    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [audioIndex]);

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
    startTimer();
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-screen h-28 left-0 bottom-0 fixed lg:z-30 z-20 flex items-end justify-center bg-neutral-900 backdrop-blur-lg border-t-2 border-white/20">
      <div className=" h-full md:flex hidden items-center md:pl-20 pl-10">
        <div
          className="h-16 w-16 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${artist.artistPhoto}` }}
        ></div>
        <div className="flex flex-col w-40">
          <p className="px-5 capitalize text-gray-100 truncate">
            {data[audioIndex].title}
          </p>
          <p className="px-5 text-gray-100/50 text-sm">{artist.artistName}</p>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:px-10 px-10 flex flex-col justify-center my-2">
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <div className="flex items-center text-sm text-gray-100">
          {new Date(Math.floor(trackProgress) * 1000)
            .toISOString()
            .slice(15, 19)}
          <input
            type="range"
            value={trackProgress}
            step="any"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress bg-transparent px-5"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
          {data[audioIndex].duration}
        </div>
      </div>
      <div className="hidden h-full md:w-1/4 md:flex items-center justify-center">
        <div className="w-32 h-10 flex items-center ">
          {volume <= 0 ? (
            <img
              className="w-4 opacity-80 mr-2 "
              src={volume0.src}
              alt="volume"
            />
          ) : volume < 25 ? (
            <img
              className="w-4 opacity-80 mr-2"
              src={volume1.src}
              alt="volume"
            />
          ) : volume < 50 ? (
            <img
              className="w-4 opacity-80 mr-2"
              src={volume2.src}
              alt="volume"
            />
          ) : (
            <img
              className="w-4 opacity-80 mr-2"
              src={volume3.src}
              alt="volume"
            />
          )}
          <input
            type="range"
            value={volume}
            step="1"
            min="0"
            max={100}
            className="bg-transparent "
            onChange={(e) => setVolume(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            // style={{ background: trackStyling }}
          />
        </div>
      </div>
    </div>
  );
};

export default Audioplayer;
