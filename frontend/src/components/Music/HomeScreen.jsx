import React from 'react'
import SearchBar from "../Utility/SearchBar";
import NavigationBar from "../Utility/NavigationBar";
import ImageGrid from "./ImageGrid";
import MusicApp from "./MusicApp";

const HomeScreen = () => {
  return (
    <>
     <SearchBar />
      <NavigationBar />
      <ImageGrid />
      <MusicApp/>
    </>
  )
}

export default HomeScreen
