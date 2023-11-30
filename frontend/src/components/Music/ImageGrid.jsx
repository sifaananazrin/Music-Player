import React from "react";

const ImageGrid = () => {
  return (
    <div className="flex justify-center space-x-4 mt-10">
      <img
        className="w-40 h-40 rounded-xl"
        src="https://static.toiimg.com/thumb/msid-102034752,width-400,resizemode-4/102034752.jpg"
      />
      <img
        className="w-40 h-40 rounded-xl"
        src="https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/MAWe96RqWy/size_l.jpg"
      />
      <img
        className="w-40 h-40 rounded-xl"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Fifty_Shades_Darker-_Original_Motion_Picture_Soundtrack.png/220px-Fifty_Shades_Darker-_Original_Motion_Picture_Soundtrack.png"
      />
      <img
        className="w-40 h-40 rounded-xl"
        src="https://static.toiimg.com/thumb/msid-102034752,width-400,resizemode-4/102034752.jpg"
      />
    </div>
  );
};

export default ImageGrid;
