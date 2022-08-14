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
    <div className="bg-slate-900 w-full h-full pb-147">
      {/* Title */}
      <div className="">
        <h1 className="title max-w-[1280px] mx-auto">
          get Your <span className="text-[#825AFC] ">hungry wolf</span>
        </h1>
        <p className="text-white max-w-[860px] px-5 mx-auto text-lg sm:text-2xl  tracking-small leading-28 sm:leading-8 text-center font-barlow pt-5">
          Hungry Wolves is a collection of 6,000 randomly generated wolves
          prowling the Ethereum blockchain as ERC-721 NFTs. Half of the wolves
          hold the rank of Alpha and the other half Beta. Beta wolves will be
          able to challenge Alpha wolves for their metadata rank.
        </p>
        <button className="bg-[#2F68FF] hover:bg-[#2153da] shadow-button transition duration-200 text-white font-bold font-condensed uppercase text-1xl leading-3 flex justify-center items-center px-5 py-4 rounded-lg text-center mx-auto mt-6">
          <RiShip2Line className="text-2xl mr-2" />
          <span>Buy wolves now</span>
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full flex space-x-5 overflow-auto no-scrollbar mt-16">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-ochkok w-1/4 h-96 flex justify-center scroll-smooth no-scrollbar items-center scrollbar-hide rounded-twenty border-2 border-kok"
          >
            <div className="w-[400px] h-full p-5">
              <img
                className="w-full h-full object-cover rounded-ten"
                src={item.img}
                alt="wolf"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
