import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';

const SpotifyPlaylist = () => {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const accessToken = "BQArbnxkG0b2L6fPhw48XQ4n_eY4ivn-25fZxFgmGXPJvTd9FV-65TK_kRne0G5MLB8kbBSlAc1PBIiMXcCS7UAVSv5LxZE6umNSuKiSdW13k3Iv0qI"
        const response = await axios.get(
          "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPlaylistData(response.data.tracks.items);
      }catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlistData.map((track) => (
          <div key={track.track.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={track.track.album.images[0].url} alt={track.track.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 truncate">{track.track.name}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-3">
                {track.track.artists.map((artist) => artist.name).join(", ")}
              </p>
              <div className="flex justify-center">
                <ReactPlayer
                  url={track.track.preview_url}
                  controls
                  width="100%"
                  height="50px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyPlaylist;