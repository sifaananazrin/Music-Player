import React from "react";
import "./MusicPlayer.css";

const MusicPlayer = ({ albumData }) => {
  console.log(albumData)
  return (
    <div className="music-player">
      {albumData &&
        albumData.topalbums &&
        albumData.topalbums.album &&
        albumData.topalbums.album[0] && (
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${albumData.topalbums.album[0].image[3]["#text"]})`,
              }}
            ></div>
            <div>
              <h3 className="text-lg font-semibold">
                {albumData.topalbums.album[0].name}
              </h3>
              <p className="text-sm">{albumData.topalbums.album[0].artist.name}</p>
            </div>
          </div>
        )}
      <div className="flex space-x-4">
        <button className="player-button" title="Previous">
          <i className="fa fa-backward text-xl"></i>
        </button>
        <button className="player-button" title="Play">
          <i className="fa fa-play text-3xl"></i>
        </button>
        <button className="player-button" title="Next">
          <i className="fa fa-forward text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
