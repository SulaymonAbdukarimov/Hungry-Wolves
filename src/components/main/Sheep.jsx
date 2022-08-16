import React from "react";
import sheep from "../../assets/mainpage/sheep/sheep1.png";
import sheep1 from "../../assets/mainpage/sheep/sheep2.png";
import sheep2 from "../../assets/mainpage/sheep/sheep3.png";

function Sheep() {
  const cards = [
    { id: 1, img: sheep },
    { id: 2, img: sheep2 },
    { id: 3, img: sheep1 },
    { id: 4, img: sheep },
    { id: 5, img: sheep2 },
    { id: 6, img: sheep1 },
  ];
  return (
    <div className="bg-herobg w-full h-full pt-[170px]">
      <div className="max-w-[1070px] px-5 mx-auto pb-14">
        <h3 className="uppercase text-white font-bold text-6xl leading-72 text-center  font-condensed tracking-0.15 mb-5">
          Hunt Delicious Sheep
        </h3>
        <p className="text-center font-medium max-w-[860px] px-5 mx-auto text-xl text-white opacity-75 tracking-0.005 font-barlow">
          All Hungry Wolves who join a Wolfpack will receive regularly scheduled
          airdrops of either Scrumptious Sheep or Lil Lambs depending on their
          rank. Both are generated NFTs with unique visual traits and rarity. By
          eating (burning) your sheep inside the Wolf Den, you’ll be able to
          earn Dominance for your Hungry Wolf as well as rewards for yourself
          and your Wolfpack.
        </p>
      </div>

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

export default Sheep;
