import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { MoonLoader } from "react-spinners";
import MusicPlayer from "./MusicPlayer";

const MusicApp = () => {
  const [musicData, setMusicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.getAlbums);
        setMusicData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading || !musicData ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <MoonLoader color="red" />
        </div>
      ) : (
        <MusicPlayer albumData={musicData} />
      )}
    </>
  );
};

export default MusicApp;
