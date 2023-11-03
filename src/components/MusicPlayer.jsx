import React, { useEffect, useState } from "react";
import "./MusicPlayer.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "../api/axios"; 
import requests from "../api/request"; 

const MusicPlayer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(requests.getAlbums).then((response) => {
        setData(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="music-player">
      {data &&
        data.topalbums &&
        data.topalbums.album &&
        data.topalbums.album[0] && (
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.topalbums.album[0].image[3]["#text"]})`,
              }}
            ></div>
            <div>
              <h3 className="text-lg font-semibold">
                {data.topalbums.album[0].name}
              </h3>
              <p className="text-sm">{data.topalbums.album[0].artist.name}</p>
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
