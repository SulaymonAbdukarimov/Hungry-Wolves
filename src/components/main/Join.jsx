import React from "react";
import hungry from "../../assets/mainpage/wild/hungry.png";
function Join(props) {
  return (
    <div className="bg-slate-900 w-full h-full pt-147">
      <div className="flex justify-between max-w-[1280px] px-5 mx-auto">
        {/* content */}
        <div className="w-3/6">
          <h4 className="text-white font-condensed text-6xl font-bold leading-72 uppercase tracking-0.15">
            Join a Wolfpack
          </h4>
          <p className="text-xl font-barlow font-medium text-white opacity-75 leading-7 tracking-0.005 mt-5 mb-6">
            Depending on the traits of your wolf, you’ll have the ability to
            join specific Wolfpacks inside The Wolf Den. Each pack has its own
            branding and gated channel inside our Discord server.
          </p>
          <button className="bg-[rgb(47,104,255)] hover:bg-[#2153da] shadow-button transition duration-200 text-white font-bold font-condensed uppercase text-1xl leading-3 flex justify-center items-center px-5 py-4 rounded-lg mt-8">
            <svg
              className="text-2xl mr-2"
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
        {/* card */}
        {/* <div className="border-2 border-kok  rounded-twenty overflow-hidden bg-wolfbg w-full h-full relative">
          <div className="w-full h-full flex justify-between overflow-hidden ">
            <div className="pt-[30px] pl-[30px]">
              <img src={stone} alt=" stone" />
              <span className="inline-block uppercase font-bold text-8xl tracking-0.005 font-condensed leading-[115px] text-white">wild</span>
            </div>
            <div>
              <img src={wolf} alt="wolf" />
            </div>
          </div>
        </div> */}
        <div className="w-[505px] h-[600px]">
          <img className=" w-full h-full" src={hungry} alt="hungry" />
        </div>
      </div>
    </div>
  );
}

export default Join;
