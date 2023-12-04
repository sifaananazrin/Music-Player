import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Music/HomeScreen";
import MusicDetails from "./components/Music/Musics/MusicDeatils";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/music" element={<MusicDetails />} />
      </Routes>
    </>
  );
};

export default App;
