import React from "react";
import monkey from "../../assets/mainpage/team/monkey.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import wolf from "../../assets/mainpage/team/wolf.png";
import kasmonaft from "../../assets/mainpage/team/kasmanftwolf.png";

function Team() {
  return (
    <div className="pt-[147px] bg-[#1C1C1E] w-full h-full">
      <div className="max-w-[1260px] mx-auto px-5">
        <h3 className="text-white font-bold uppercase font-condensed text-6xl leading-72 text-center tracking-0.15  ">
          our team
        </h3>
        <div className="pt-9 flex flex-row gap-5">
          {/* start of first card */}
          <div className="p-5 border-team rounded-twenty border-2 bg-team">
            <div className="w-360px h-[360px]">
              <img
                className="w-full h-full rounded-ten"
                src={monkey}
                alt="monkey"
              />
            </div>
            <h4 className=" mt-6 font-bold text-white text-2xl tracking-wider uppercase text-center font-condensed leading-7">
              adam
            </h4>
            <p className="mt-2 tracking-0.24 font-normal text-center uppercase font-condensed text-sm text-white leading-4 ">
              co founder
            </p>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaTwitter className="text-white text-lg" />
                </a>
              </div>
              <div className="rounded-full ml-[14px] cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaLinkedinIn className="text-white text-lg" />
                </a>
              </div>
            </div>
            <div className="max-w-[340px] mx-auto text-base font-barlow mt-5 font-medium text-white tracking-0.005 ">
              Serial entrepreneur who sold his gamification software company to
              Microsoft. Over a decade of experience successfully building and
              marketing products at scale. Passionate member of a number of
              prominent NFT communities, including BAYC.
            </div>
          </div>
          {/* end of first card */}
          {/* start of second card */}
          <div className="p-5 border-team rounded-twenty border-2 bg-team">
            <div className="w-360px h-[360px]">
              <img
                className="w-full h-full rounded-ten"
                src={wolf}
                alt="wolf"
              />
            </div>
            <h4 className=" mt-6 font-bold text-white text-2xl tracking-wider uppercase text-center font-condensed leading-7">
              daBigBadWolf
            </h4>
            <p className="mt-2 tracking-0.24 font-normal text-center uppercase font-condensed text-sm text-white leading-4 ">
              co founder
            </p>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaTwitter className="text-white text-lg" />
                </a>
              </div>
            </div>
            <div className="max-w-[340px] mx-auto text-base font-barlow mt-5 font-medium text-white tracking-0.005 ">
              Professional Artist. daBigBadWolf needs to stay in disguise due to
              other commitments. Here from da start and in charge of da art for
              Hungry Wolves.
            </div>
          </div>
          {/* end of second card */}

          {/* Start of third card  */}
          <div className="p-5 border-team rounded-twenty border-2 bg-team">
            <div className="w-360px h-[360px]">
              <img
                className="w-full h-full rounded-ten"
                src={kasmonaft}
                alt="kasmonaft"
              />
            </div>
            <h4 className=" mt-6 font-bold text-white text-2xl tracking-wider uppercase text-center font-condensed leading-7">
              JIMMY
            </h4>
            <p className="mt-2 tracking-0.24 font-normal text-center uppercase font-condensed text-sm text-white leading-4 ">
              co founder
            </p>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaTwitter className="text-white text-lg" />
                </a>
              </div>
              <div className="rounded-full ml-[14px] cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaLinkedinIn className="text-white text-lg" />
                </a>
              </div>
            </div>
            <div className="max-w-[340px] mx-auto text-base font-barlow mt-5 font-medium text-white tracking-0.005 ">
              Software Dev who cofounded as CTO a now-acquired multi-million
              dollar tech startup out of college, now actively managing 100+
              developers internationally. BTC/ETH since 2011/2016, 2017
              Cryptokitty VG0 Collector & Ethereum Maximalist.
            </div>
          </div>
          {/* end of third card */}
        </div>
      </div>
    </div>
  );
}

export default Team;

{
  /* <div className="w-full flex space-x-5 overflow-auto no-scrollbar mt-16"> */
}
{
  /* {cards.map((item) => (
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
</div> */
}
