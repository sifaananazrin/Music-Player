import React from "react";

const NavigationBar = () => {
  return (
    <div className="w-full flex h-10 sm:h-10 bg-neutral-950 justify-center space-x-4 sm:space-x-10">
      <div className="w-7 text-stone-50 text-base font-normal font-['Roboto'] leading-normal mt-2">
        All
      </div>

      <div className="hidden sm:block w-16 text-zinc-400 text-base font-normal font-['Roboto'] leading-normal mt-2">
        OldSongs
      </div>
      <div className="hidden sm:block w-20 text-zinc-400 text-base font-normal font-['Roboto'] leading-normal mt-2">
        New Songs
      </div>

      <div className="w-20 sm:w-28 text-zinc-400 text-base font-normal font-['Roboto'] leading-normal mt-2">
        Top Artists
      </div>
    </div>
  );
};

export default NavigationBar;
