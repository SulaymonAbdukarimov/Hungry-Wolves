import React from "react";
import { RiShip2Line } from "react-icons/ri";
import wolf1 from "./../../assets/mainpage/wolf/wolf1.png";
import wolf2 from "./../../assets/mainpage/wolf/wolf2.png";
import wolf3 from "./../../assets/mainpage/wolf/wolf3.png";

function Hero() {
  const cards = [
    { id: 1, img: wolf1 },
    { id: 2, img: wolf2 },
    { id: 3, img: wolf3 },
    { id: 4, img: wolf1 },
    { id: 5, img: wolf2 },
    { id: 6, img: wolf3 },
  ];

  return (
    <div className="bg-slate-900 w-full h-full">
      {/* Title */}
      <div className=" pt-6 w-3/5 mx-auto">
        <h1 className="uppercase font-bold text-center w-full text-white text-5xl tracking-wider font-condensed not-italic">
          get Your <span className="text-[#825AFC] ">hungry wolf</span>
        </h1>
        <p className="text-white text-1xl tracking-wider leading-6 text-center font-barlow max-w-2xl mx-auto py-5">
          Hungry Wolves is a collection of 6,000 randomly generated wolves
          prowling the Ethereum blockchain as ERC-721 NFTs. Half of the wolves
          hold the rank of Alpha and the other half Beta. Beta wolves will be
          able to challenge Alpha wolves for their metadata rank.
        </p>
        <button className="bg-[#2F68FF] hover:bg-[#2153da]   shadow-xl shadow-[#2F68FF] transition duration-200 text-white font-bold font-condensed uppercase text-1xl leading-3 flex justify-center items-center px-5 py-4 rounded-lg text-center mx-auto mb-9">
          <RiShip2Line className="text-2xl mr-2" />
          <span>Buy wolves now</span>
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full flex justify-start items-start overflow-auto">
        <div className="bg-hero">
          <div className="w-80 h-80">
            <img
              className="w-full h-full object-cover"
              src={wolf1}
              alt="wolf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
