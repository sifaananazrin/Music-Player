import React from "react";
import SearchBar from "./components/Utility/SearchBar";
import NavigationBar from "./components/Utility/NavigationBar";
import ImageGrid from "./components/Music/ImageGrid";
import MusicApp from "./components/Music/MusicApp";
const App = () => {
  return (
    <>
      <SearchBar />
      <NavigationBar />
      <ImageGrid />
      <MusicApp/>
    </>
  );
};

export default App;
