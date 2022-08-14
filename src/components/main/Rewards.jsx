import React from "react";
import before from "../../assets/mainpage/rewards/before.png";
import after from "../../assets/mainpage/rewards/after.png";

function Rewards() {
  return (
    <div className="bg-slate-900 w-full h-full pt-[173px] pb-[145px]">
      <div className="max-w-[1280px] px-5 mx-auto flex justify-between ">
        {/* content */}
        <div className="w-3/6">
          <h3 className="font-bold text-6xl tracking-0.15 leading-[68px] uppercase text-white font-condensed pb-5">
            Earn Status & Rewards
          </h3>
          <p className="font-barlow font-medium text-xl tracking-0.005 text-white opacity-75">
            Hungry Wolf owners will be able to promote their Dominance ranking
            via global leaderboards, both by individual and Wolfpack. Unlockable
            rewards such as the ability to evolve your NFTs appearance will
            become available as the project progresses.
          </p>
        </div>
        {/* img */}
        <div className="rounded-twenty border-2 border-kok overflow-hidden ">
          <div className="w-[505px] h-[505px]">
            <img className="w-full h-full" src={before} alt="wolf" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
