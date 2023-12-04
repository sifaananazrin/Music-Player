import React, { useState, useEffect, useRef } from "react";
import {
  FaHeart,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import { MdVolumeUp } from "react-icons/md";
import axios from "axios";

const Musics = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Change here
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/songs/")
      .then((response) => {
        setSongs(response.data);
        console.log("songs", songs);
        setIsLiked(response.data[currentSongIndex].isLiked);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((error) => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const toggleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/songs/like/${songs[currentSongIndex]._id}`
      );
      setIsLiked(response.data.isLiked);
    } catch (error) {
      console.error("Error toggling like status:", error);
    }
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-black text-white p-4">
      <div className="flex justify-between">
        <FaBackward
          className="text-white text-2xl"
          onClick={handlePreviousSong}
        />
        <MdVolumeUp className="text-white text-2xl" />
      </div>

      <div className="flex flex-col items-center mt-24">
        <div className="w-48 h-48 bg-gray-700 rounded-full mb-5 flex items-center justify-center">
          {isPlaying ? (
            <FaPause
              className="text-white text-6xl mt-16"
              onClick={togglePlay}
            />
          ) : (
            <FaPlay
              className="text-white text-6xl mt-16"
              onClick={togglePlay}
            />
          )}
        </div>
        {songs.length > 0 && (
          <>
            <h1 className="text-3xl font-bold">
              {songs[currentSongIndex].title}
            </h1>
            <p className="text-gray-400">{songs[currentSongIndex].artist}</p>
            <audio
              ref={audioRef}
              src={songs[currentSongIndex].url}
              onEnded={handleNextSong}
              autoPlay={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </>
        )}
      </div>

      <div className="mt-24">
        <div className="flex justify-between items-center space-x-8 mb-4">
          <FaBackward
            className="text-white text-2xl"
            onClick={handlePreviousSong}
          />
          {isPlaying ? (
            <FaPause className="text-white text-4xl" onClick={togglePlay} />
          ) : (
            <FaPlay className="text-white text-4xl" onClick={togglePlay} />
          )}
          <FaForward className="text-white text-2xl" onClick={handleNextSong} />
        </div>
        <input
          type="range"
          min="0"
          max={audioRef.current?.duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full bg-yellow-300 rounded-full cursor-pointer"
        />
        <div className="flex justify-between text-xs md-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(audioRef.current?.duration || 0)}</span>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <FaHeart
          className={`text-2xl ${isLiked ? "text-red-500" : "text-red-400"}`}
          onClick={toggleLike}
        />
      </div>
    </div>
  );
};

export default Musics;
