import React from "react";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import ImageGrid from "./components/ImageGrid";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <>
      <SearchBar />
      <NavigationBar />
      <ImageGrid />
      <MusicPlayer />
    </>
  );
};

export default App;
