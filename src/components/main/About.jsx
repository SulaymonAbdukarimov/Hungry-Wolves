import React from "react";
import first from "../../assets/mainpage/about/first.png";
import second from "../../assets/mainpage/about/second.png";
import logo from "../../assets/mainpage/about/large.png";

function About() {
  return (
    <div className="bg-slate-900 w-full h-full pb-147">
     <div className="max-w-[1020px] mx-auto px-5">
     <h3 className="text-white font-bold text-6xl leading-72 text-center tracking-0.15 uppercase font-condensed">
        learn about our project
      </h3>
      <p className="text-xl text-center text-white opacity-70 font-barlow tracking-0.005 mt-4 mb-14">
        3 minute overview to understand our game mechanics and ecosystem to get
        you started.
      </p>
     </div>
      <div className="w-70 mx-auto flex justify-center items-center">
        <div className="relative w-[200px] h-[200px]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={first}
              alt="first"
            />
          </div>
          <div className="w-full h-full blur-100 bg-white absolute inset-0"></div>
        </div>
        <div className="bg-ochkok shadow-aboutcard flex justify-center items-center  rounded-twenty border-2 border-kok">
          <div className=" py-[190px] px-[120px] relative">
            <img
              className="w-[340px] h-[200px] object-content"
              src={logo}
              alt="logo"
            />
            <i class="fa-solid fa-circle-play text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"></i>
          </div>
        </div>

        <div className="relative w-[200px] h-[200px]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={second}
              alt="second"
            />
          </div>
          <div className="w-full h-full blur-100 bg-white absolute inset-0"></div>
        </div>
      </div>
      <button className="bg-[rgb(47,104,255)] hover:bg-[#2153da] shadow-button transition duration-200 text-white font-bold font-condensed uppercase text-1xl leading-3 flex justify-center items-center px-5 py-4 rounded-lg text-center mx-auto mt-8">
        <svg
          className="text-2xl mr-2"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 5H8.5C7.675 5 7.0075 5.675 7.0075 6.5L7 18.5C7 19.325 7.6675 20 8.4925 20H17.5C18.325 20 19 19.325 19 18.5V9.5L14.5 5ZM16 17H10V15.5H16V17ZM16 14H10V12.5H16V14ZM13.75 10.25V6.125L17.875 10.25H13.75Z"
            fill="white"
          />
        </svg>

        <span>Read white paper</span>
      </button>
    </div>
  );
}

export default About;
