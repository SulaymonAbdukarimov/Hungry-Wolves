import React from "react";
import whitewolf from "../../assets/mainpage/roadmap/whitewolf.png";
import stone from "../../assets/mainpage/roadmap/darkpack2.png";
import sheep from "../../assets/mainpage/roadmap/sheep.png";
import uchburchak from "../../assets/mainpage/roadmap/uchburchak.png";
import competitions from "../../assets/mainpage/roadmap/competitions.png";

function Roadmap(props) {
  return (
    <div className="pt-[107px] bg-[#1C1C1E] w-full h-full">
      <div className="max-w-[1280px] mx-auto px-5">
        <h4 className="uppercase font-bold text-6xl leading-72 font-condensed text-white tracking-0.15 pb-[36px]">
          roadmap
        </h4>

        {/* cards */}
        <div className="flex justify-start items-start flex-nowrap gap-5 w-full">
          {/* card 1 */}
          <div className="bg-firstcard w-1/3 h-full rounded-twenty border-2 border-[#7E89FD] pt-[33px]">
            <div className="max-w-[380px] mx-auto px-5">
              <div className="flex justify-start ml-[3px] items-center">
                <div className="bg-white w-[18px] h-[18px] rounded shadow-white flex justify-center items-center">
                  <i className="fa-solid fa-check font-bold  text-[#2F68FF]"></i>
                </div>
                <span className="ml-[15px] font-bold text-xl uppercase tracking-widest font-condensed line-through text-white">
                  complete
                </span>
              </div>
              <div className="mt-[36px] text-white font-medium text-xl font-barlow tracking-0.005">
                Announce project and open Discord and Twitter channels.
              </div>
              <div className="flex justify-start items-center mt-[50px]">
                <div className="bg-white shadow-white rounded-full w-[64px] h-[64px] flex justify-center items-center">
                  <svg
                    width="37"
                    height="28"
                    viewBox="0 0 37 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.1049 2.32503C28.6802 1.22894 26.1559 0.431791 23.5319 0C23.1998 0.597865 22.8344 1.3618 22.5687 1.99288C19.7787 1.56109 16.9554 1.56109 14.1654 1.99288C13.8665 1.29537 13.5343 0.631079 13.169 0C10.545 0.431791 7.98747 1.22894 5.59601 2.35824C0.813089 9.49941 -0.482285 16.4413 0.148794 23.3167C2.97204 25.4093 6.09423 27.0036 9.44891 28C10.2129 26.9703 10.8771 25.9075 11.4418 24.7782C10.3457 24.3796 9.31606 23.8814 8.31961 23.2835C8.58533 23.0842 8.81784 22.8849 9.08355 22.6856C14.9626 25.4757 21.8048 25.4757 27.6838 22.6856C27.9495 22.8849 28.182 23.0842 28.4477 23.2835C27.4513 23.8814 26.3884 24.3796 25.2923 24.7782C25.857 25.9075 26.5213 26.9703 27.2852 28C30.6399 26.9703 33.7953 25.4093 36.5853 23.3167C37.316 15.3452 35.2567 8.43654 31.1049 2.32503ZM12.2389 19.0652C10.4121 19.0652 8.95069 17.4045 8.95069 15.3784C8.95069 13.3523 10.4121 11.6584 12.2389 11.6584C14.099 11.6584 15.5604 13.3191 15.5604 15.3784C15.5272 17.4045 14.099 19.0652 12.2389 19.0652ZM24.462 19.0652C22.6351 19.0652 21.1737 17.4045 21.1737 15.3784C21.1737 13.3523 22.6351 11.6584 24.462 11.6584C26.322 11.6584 27.7834 13.3191 27.7502 15.3784C27.717 17.4377 26.2888 19.0652 24.462 19.0652Z"
                      fill="white"
                    />
                    <path
                      d="M31.1049 2.32503C28.6802 1.22894 26.1559 0.431791 23.5319 0C23.1998 0.597865 22.8344 1.3618 22.5687 1.99288C19.7787 1.56109 16.9554 1.56109 14.1654 1.99288C13.8665 1.29537 13.5343 0.631079 13.169 0C10.545 0.431791 7.98747 1.22894 5.59601 2.35824C0.813089 9.49941 -0.482285 16.4413 0.148794 23.3167C2.97204 25.4093 6.09423 27.0036 9.44891 28C10.2129 26.9703 10.8771 25.9075 11.4418 24.7782C10.3457 24.3796 9.31606 23.8814 8.31961 23.2835C8.58533 23.0842 8.81784 22.8849 9.08355 22.6856C14.9626 25.4757 21.8048 25.4757 27.6838 22.6856C27.9495 22.8849 28.182 23.0842 28.4477 23.2835C27.4513 23.8814 26.3884 24.3796 25.2923 24.7782C25.857 25.9075 26.5213 26.9703 27.2852 28C30.6399 26.9703 33.7953 25.4093 36.5853 23.3167C37.316 15.3452 35.2567 8.43654 31.1049 2.32503ZM12.2389 19.0652C10.4121 19.0652 8.95069 17.4045 8.95069 15.3784C8.95069 13.3523 10.4121 11.6584 12.2389 11.6584C14.099 11.6584 15.5604 13.3191 15.5604 15.3784C15.5272 17.4045 14.099 19.0652 12.2389 19.0652ZM24.462 19.0652C22.6351 19.0652 21.1737 17.4045 21.1737 15.3784C21.1737 13.3523 22.6351 11.6584 24.462 11.6584C26.322 11.6584 27.7834 13.3191 27.7502 15.3784C27.717 17.4377 26.2888 19.0652 24.462 19.0652Z"
                      fill="#AF52FA"
                    />
                  </svg>
                </div>
                <div className="bg-white shadow-white rounded-full w-[64px] h-[64px] flex justify-center items-center ml-[16px]">
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.28444 24C20.5346 24 26.8895 14.5004 26.5035 5.97944C27.6909 5.12523 28.716 4.058 29.5259 2.83892C28.4418 3.32191 27.2733 3.64672 26.0479 3.79436C27.2986 3.0435 28.2583 1.85816 28.7118 0.442922C27.5433 1.13683 26.2441 1.64303 24.8647 1.913C23.7595 0.736094 22.184 0 20.4439 0C16.5315 0 13.6567 3.65094 14.5404 7.43897C9.5059 7.18587 5.04085 4.77511 2.0543 1.10941C0.46823 3.83232 1.23174 7.39468 3.92933 9.198C2.93593 9.16636 2.00368 8.89428 1.18534 8.44082C1.11995 11.2481 3.13208 13.8719 6.0448 14.4582C5.19482 14.6902 4.25836 14.743 3.30714 14.5616C4.08119 16.9681 6.31899 18.7208 8.96807 18.7693C6.42234 20.7625 3.21433 21.6567 0 21.2771C2.68072 22.996 5.86342 24 9.28444 24Z"
                      fill="white"
                    />
                    <path
                      d="M9.28444 24C20.5346 24 26.8895 14.5004 26.5035 5.97944C27.6909 5.12523 28.716 4.058 29.5259 2.83892C28.4418 3.32191 27.2733 3.64672 26.0479 3.79436C27.2986 3.0435 28.2583 1.85816 28.7118 0.442922C27.5433 1.13683 26.2441 1.64303 24.8647 1.913C23.7595 0.736094 22.184 0 20.4439 0C16.5315 0 13.6567 3.65094 14.5404 7.43897C9.5059 7.18587 5.04085 4.77511 2.0543 1.10941C0.46823 3.83232 1.23174 7.39468 3.92933 9.198C2.93593 9.16636 2.00368 8.89428 1.18534 8.44082C1.11995 11.2481 3.13208 13.8719 6.0448 14.4582C5.19482 14.6902 4.25836 14.743 3.30714 14.5616C4.08119 16.9681 6.31899 18.7208 8.96807 18.7693C6.42234 20.7625 3.21433 21.6567 0 21.2771C2.68072 22.996 5.86342 24 9.28444 24Z"
                      fill="#2F68FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-right pb-[21px] font-bold text-white text-5xl leading-[58px] tracking-[0.03em] font-condensed mt-[24px]">
                01
              </div>
            </div>
          </div>
          {/*end of card 1 */}

          {/* Start of card 2 */}
          <div className="bg-firstcard w-1/3 h-full rounded-twenty border-2 border-[#7E89FD] pt-[33px] relative">
            <div className="max-w-[380px] mx-auto px-5">
              <div className="flex justify-start ml-[3px] items-center">
                <div className="bg-white  w-[18px] h-[18px] rounded shadow-white flex justify-center items-center">
                  <i className="fa-solid fa-check font-bold  text-[#2F68FF]"></i>
                </div>
                <span className="ml-[15px] font-bold text-xl uppercase tracking-widest font-condensed line-through text-white">
                  complete
                </span>
              </div>
              <div className="mt-[36px] text-white font-medium text-xl font-barlow tracking-0.005">
                Open the Wolf Den and allow all Hungry Wolves to join Wolfpacks.
              </div>
              <div className="w-[275px] h-[275px] mt-[36px] ml-[-30px]">
                <img className="w-full h-full" src={whitewolf} alt="wolf" />
              </div>
              <div className="absolute bottom-[140px] right-[50px]">
                <img src={stone} alt="stone" />
              </div>
              <div className=" absolute bottom-[20px] right-[30px] font-bold text-white text-5xl leading-[58px] tracking-[0.03em] font-condensed">
                02
              </div>
            </div>
          </div>
          {/* End of card 2 */}
          {/* Start of card 3 */}
          <div className="bg-firstcard w-1/3 h-full rounded-twenty border-2 border-[#7E89FD] pt-[33px]">
            <div className="max-w-[380px] mx-auto px-5">
              <div className="flex justify-start ml-[3px] items-center">
                <div className="bg-white w-[18px] h-[18px] rounded shadow-white flex justify-center items-center">
                  <i className="fa-solid fa-check font-bold  text-[#2F68FF]"></i>
                </div>
                <span className="ml-[15px] font-bold text-xl uppercase tracking-widest font-condensed line-through text-white">
                  complete
                </span>
              </div>
              <div className="mt-[36px] text-white font-medium text-xl font-barlow tracking-0.005">
                Schedule our first Scrumptious Sheep / Lil Lambs airdrop.
              </div>
              <div className="flex justify-between items-end mt-[39px]">
                <div className="w-[160px] h-[160px] ml-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    src={sheep}
                    alt="sheep"
                  />
                </div>
                <div className=" pb-[21px] font-bold text-white text-5xl leading-[58px] tracking-[0.03em] font-condensed ">
                  03
                </div>
              </div>
            </div>
          </div>
          {/* End of card 3 */}
        </div>
        {/* end of cards */}

        {/* 2 line*/}
        <div className="flex justify-start items-start flex-nowrap gap-5 w-full">
          {/* Start of card 4 */}

          <div className="bg-firstcard w-1/3 h-full rounded-twenty border-2 border-[#7E89FD] pt-[33px] relative">
            <div className="max-w-[380px] mx-auto px-5">
              <div className="flex justify-start ml-[3px] items-center">
                <div className="bg-white w-[18px] h-[18px] rounded shadow-white flex justify-center items-center">
                  <i className="fa-solid fa-check font-bold  text-[#2F68FF]"></i>
                </div>
                <span className="ml-[15px] font-bold text-xl uppercase tracking-widest font-condensed line-through text-white">
                  complete
                </span>
              </div>
              <div className="mt-[36px] text-white font-medium text-xl font-barlow tracking-0.005">
                Add features to eat (burn) Scrumptious Sheep / Lil Lambs and
                earn Dominance.
              </div>
              <div className="flex justify-center items-center mt-[38px]">
                <img
                  className="drop-shadow-sky"
                  src={uchburchak}
                  alt="uchburchak"
                />
              </div>
              {/* <div className="absolute bg-bgglow bottom-[65px] left-[50%]"></div> */}
              <div className=" text-right pb-[21px] font-bold  text-white text-5xl leading-[58px] tracking-[0.03em] font-condensed ">
                04
              </div>
            </div>
          </div>

          {/* End of Card 4 */}

          {/* Start of Card 5 */}

          <div className="bg-firstcard w-1/3 h-full rounded-twenty border-2 border-[#7E89FD] pt-[33px] relative">
            <div className="max-w-[380px] mx-auto px-5">
              <h5 className="font-bold text-xl font-condensed text-white uppercase tracking-widest">
                Underway
              </h5>
              <div className="mt-[36px] text-white font-medium text-xl font-barlow tracking-0.005">
                Create competitions between Wolfpacks which yield additional
                rewards.
              </div>
              <div className="flex justify-center items-center mt-[24px] ">
                <img
                  className="w-[105px] h-[115px]"
                  src={competitions}
                  alt="competitions"
                />
              </div>
              {/* <div className="absolute bg-bgglow bottom-[65px] left-[50%]"></div> */}
              <div className=" text-right pb-[21px] font-bold  text-white text-5xl leading-[58px] tracking-[0.03em] font-condensed ">
                05
              </div>
            </div>
          </div>
          {/* End of Card 5 */}

          {/* end of 2 line */}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
