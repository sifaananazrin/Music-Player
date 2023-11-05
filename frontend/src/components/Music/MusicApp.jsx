import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import MusicPlayer from "./MusicPlayer";

const MusicApp = () => {
  const [musicData, setMusicData] = useState(null); 

  useEffect(() => {
    try {
      axios.get(requests.getAlbums).then((response) => {
        setMusicData(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <MusicPlayer albumData={musicData} />;
};

export default MusicApp;
