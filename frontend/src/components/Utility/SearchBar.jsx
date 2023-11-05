import React from "react";

const SearchBar = () => {
  return (
    <div className="w-100 h-12 flex bg-pink-900 bg-opacity items-center p-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 h-full bg-transparent outline-none border-2 border-white-600 rounded-full mx-auto"
      />
    </div>
  );
};

export default SearchBar;
