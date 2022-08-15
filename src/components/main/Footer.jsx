import React from "react";
import logo from "../../assets/mainpage/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-footer shadow-footer w-full h-full ">
      <div className="max-w-[1260px] mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="pt-8 pb-9">
            <div className="w-[186px] h-24">
              <img
                className="w-full h-full object-cover"
                src={logo}
                alt="footer img"
              />
            </div>
            <p className="font-medium font-condensed  pt-4 text-center tracking-widest text-sm text-white uppercase leading-4">
              © Wolfpack Labs LLC
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="font-condensed font-bold text-white text-sm leading-4 tracking-widest uppercase ">
              <a href="#">Privacy policy</a>
            </div>
            <div className="ml-8 font-condensed font-bold text-white text-sm leading-4 tracking-widest uppercase">
              <a href="#">terms of sale</a>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="ml-8 rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
              <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                <FaTwitter className="text-white text-lg" />
              </a>
            </div>
            <div className="ml-8 bg-[#2F68FF] cursor-pointer hover:bg-[#214fcf] shadow-icons   transition duration-200  shadow-blue-500/200 rounded-full w-7 h-7 flex justify-center items-center px-1 py-1.5">
              <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                <svg
                  className="text-white text-lg"
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0H1.5C0.675 0 0.00750017 0.675 0.00750017 1.5L0 13.5C0 14.325 0.6675 15 1.4925 15H10.5C11.325 15 12 14.325 12 13.5V4.5L7.5 0ZM9 12H3V10.5H9V12ZM9 9H3V7.5H9V9ZM6.75 5.25V1.125L10.875 5.25H6.75Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <div className="ml-8 rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-icons  w-7 h-7 flex justify-center items-center px-1 py-1.5">
              <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                <FaInstagram className="text-white text-lg" />
              </a>
            </div>
            <div className="ml-7">
              <button className="bg-[#2F68FF] hover:bg-[#2153da] shadow-button transition duration-200 text-white font-bold font-condensed uppercase text-sm leading-3 flex justify-center items-center px-5 py-4 rounded-lg">
                <svg
                  className="w-6 h-[18px] mr-2"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3242 5.51919C19.7399 4.803 18.0905 4.28214 16.376 4C16.1589 4.39065 15.9202 4.88981 15.7466 5.30217C13.9236 5.02003 12.0788 5.02003 10.2558 5.30217C10.0605 4.84641 9.84344 4.41235 9.60471 4C7.89019 4.28214 6.21908 4.803 4.65648 5.5409C1.53128 10.207 0.684871 14.7429 1.09722 19.2353C2.94196 20.6026 4.98202 21.6444 7.174 22.2954C7.67316 21.6226 8.10722 20.9282 8.47617 20.1903C7.75997 19.9298 7.08719 19.6043 6.43611 19.2136C6.60973 19.0834 6.76165 18.9532 6.93527 18.823C10.7767 20.646 15.2474 20.646 19.0888 18.823C19.2624 18.9532 19.4144 19.0834 19.588 19.2136C18.9369 19.6043 18.2424 19.9298 17.5262 20.1903C17.8952 20.9282 18.3292 21.6226 18.8284 22.2954C21.0204 21.6226 23.0821 20.6026 24.9052 19.2353C25.3826 14.0267 24.0371 9.5125 21.3242 5.51919ZM8.99703 16.4574C7.80338 16.4574 6.84846 15.3723 6.84846 14.0484C6.84846 12.7245 7.80338 11.6177 8.99703 11.6177C10.2124 11.6177 11.1673 12.7028 11.1673 14.0484C11.1456 15.3723 10.2124 16.4574 8.99703 16.4574ZM16.9837 16.4574C15.79 16.4574 14.8351 15.3723 14.8351 14.0484C14.8351 12.7245 15.79 11.6177 16.9837 11.6177C18.199 11.6177 19.1539 12.7028 19.1322 14.0484C19.1105 15.394 18.1773 16.4574 16.9837 16.4574Z"
                    fill="white"
                  />
                </svg>
                <span>connect now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
