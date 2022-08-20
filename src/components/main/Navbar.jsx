import React from "react";
import logo from "../../assets/mainpage/logo.png";
import { NavLink } from "react-router-dom";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import MobileHero from "./MobileHero";

function Navbar() {
  const [widthOfWindow, setWidthOfWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthOfWindow(window.innerWidth);
    });
  }, [window.innerWidth]);

  const links = [
    { id: 1, name: "get Your hungry wolf", url: "/" },
    { id: 2, name: "Enter wolf den", url: "wolfden" },
    { id: 3, name: "Hungry world", url: "hungryworld" },
    { id: 4, name: "runtz", url: "runtz" },
    { id: 5, name: "roadmap", url: "roadmap" },
    { id: 6, name: "team", url: "team" },
    { id: 7, name: "FAQ", url: "faq" },
  ];

  return (
    <>
      {widthOfWindow > 1024 ? (
        <div className="bg-herobg">
          <div className="xl-container max-w-[1380px] px-5 mx-auto pb-104 flex justify-between py-6">
            <div className="w-[186px] h-[96px] ">
              <img className="w-full h-full " src={logo} alt="logo" />
            </div>
            <ul className="text-white flex justify-between font-condensed pt-[11px]">
              {links.map((item) => (
                <li
                  key={item.id}
                  className="mr-8  uppercase font-bold  text-sm leading-4 tracking-widest "
                >
                  <NavLink
                    className=" transition duration-200 hover:text-blueberry hover:opacity-100 decoration-white"
                    to={item.url}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-between space-x-4 pt-[5px]">
              <div className="transition duration-200  rounded-full cursor-pointer bg-[#2F68FF]  shadow-icons  w-[26px] h-[26px] flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <SiDiscord className="text-white " />
                </a>
              </div>
              <div className="rounded-full cursor-pointer bg-[#2F68FF] transition duration-200 shadow-icons  w-[26px] h-[26px] flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <FaTwitter className="text-white text-lg w" />
                </a>
              </div>
              <div className=" bg-[#2F68FF] cursor-pointer shadow-icons transition duration-200 shadow-blue-500/200 rounded-full  w-[26px] h-[26px] flex justify-center items-center px-1 py-1.5">
                <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
                  <svg
                    className="text-white text-lg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.7052 10.3152V9.45627C16.7052 9.3768 16.6285 9.31926 16.5531 9.34119L12.4969 10.5138C12.475 10.5193 12.4558 10.5316 12.4408 10.5481C12.0062 11.028 11.637 11.3501 11.5392 11.4354L11.5325 11.4412C11.2805 11.6549 10.9681 11.7713 10.6394 11.7713H9.17085V10.2741H10.338C10.3681 10.2741 10.3969 10.2631 10.4188 10.2439L10.5695 10.1056C10.6339 10.0467 10.7106 9.97544 10.8024 9.88365C10.8101 9.87593 10.8179 9.86813 10.8258 9.86025C10.8741 9.81213 10.9257 9.7607 10.9763 9.70421C11.0366 9.6453 11.0955 9.57956 11.1503 9.51517C11.2421 9.41653 11.3298 9.31378 11.4216 9.20557C11.4873 9.13434 11.5476 9.05351 11.6065 8.97268C11.6723 8.89597 11.7366 8.80969 11.7969 8.7275C11.8192 8.69471 11.843 8.66156 11.8672 8.62769C11.8906 8.59506 11.9145 8.56176 11.938 8.52747C11.9819 8.46172 12.0257 8.39185 12.0627 8.32611C12.1777 8.14803 12.275 7.9576 12.3572 7.7672C12.3949 7.68577 12.425 7.60005 12.4543 7.51671C12.458 7.5061 12.4617 7.49553 12.4654 7.48501C12.4983 7.38773 12.5257 7.29597 12.5462 7.1987C12.5956 6.96993 12.6065 6.74252 12.5846 6.51514C12.5791 6.44391 12.5736 6.37405 12.5572 6.30827V6.29733C12.5517 6.25076 12.5408 6.1987 12.5257 6.15076C12.4764 5.92883 12.3997 5.7069 12.3024 5.4891C12.2695 5.40827 12.2312 5.32607 12.1942 5.25073C12.1065 5.08773 12.0147 4.92471 11.9106 4.76717C11.8897 4.73386 11.8666 4.70011 11.8435 4.66641C11.8258 4.64053 11.8081 4.61469 11.7914 4.5891C11.7254 4.4873 11.6512 4.38918 11.5793 4.29398C11.5631 4.27257 11.547 4.25131 11.5312 4.23019C11.4887 4.17441 11.4422 4.11863 11.3954 4.06248C11.3697 4.03175 11.344 4.00091 11.3188 3.9699C11.2476 3.88359 11.1777 3.80139 11.1065 3.72059C10.8517 3.43292 10.5846 3.17262 10.3462 2.95073C10.3024 2.90687 10.2544 2.86305 10.2051 2.82056C10.0202 2.65209 9.85169 2.50551 9.71059 2.39179C9.66808 2.3591 9.62996 2.32688 9.59448 2.2969C9.57051 2.27665 9.54774 2.25741 9.52564 2.23973C9.48219 2.20737 9.44456 2.1787 9.41311 2.15473C9.39398 2.14016 9.37714 2.12732 9.36265 2.11644C9.35168 2.10824 9.33936 2.10276 9.327 2.09864L9.17085 2.05481V0.76166C9.17085 0.550696 9.0859 0.361659 8.95029 0.223289C8.81467 0.0849183 8.62564 0 8.41743 0C8.00098 0 7.66397 0.341096 7.66397 0.76166V1.63289L7.5859 1.61096L7.37357 1.5507L7.18041 1.49727C7.17985 1.49727 7.17928 1.49704 7.17861 1.49677C7.17767 1.49638 7.17653 1.49591 7.17493 1.49591H7.17081L5.70503 1.09864C5.64067 1.08083 5.58586 1.1507 5.61875 1.2096L5.853 1.64249C5.86632 1.67581 5.88319 1.70913 5.90054 1.74337C5.91172 1.76543 5.92309 1.78788 5.93383 1.81096C5.97217 1.8877 6.01054 1.9685 6.04752 2.04933C6.08038 2.12056 6.11327 2.19043 6.15164 2.26714C6.16779 2.30327 6.18425 2.33984 6.20095 2.37693C6.26214 2.51283 6.32648 2.65572 6.38998 2.80963L6.3905 2.81087C6.44511 2.94059 6.49973 3.07033 6.54752 3.20551C6.67902 3.54661 6.8037 3.91099 6.91191 4.28498C6.93882 4.36857 6.96033 4.44947 6.98212 4.53146C6.9914 4.56636 7.00073 4.60146 7.01055 4.63704L7.0256 4.70279C7.06945 4.87677 7.10779 5.04936 7.1352 5.22335C7.15712 5.34252 7.17766 5.45621 7.18862 5.57129L7.18863 5.57133C7.20507 5.70145 7.22151 5.83157 7.22699 5.96169C7.23796 6.08089 7.24344 6.20554 7.24344 6.32471C7.24344 6.62883 7.21603 6.92199 7.15164 7.1987C7.14763 7.21349 7.14362 7.22847 7.13957 7.24357C7.12151 7.31099 7.10278 7.38088 7.08041 7.44803C7.06011 7.52008 7.0338 7.59214 7.00648 7.66698C6.99693 7.69315 6.98725 7.71967 6.97766 7.74664C6.97608 7.75088 6.9745 7.75513 6.97293 7.75939C6.95258 7.81424 6.93186 7.87008 6.90643 7.92474C6.77081 8.25076 6.60231 8.57544 6.42835 8.87953C6.17353 9.33022 5.91739 9.72613 5.73792 9.98092C5.727 9.9973 5.71635 10.0129 5.70609 10.0279C5.69318 10.0468 5.68088 10.0647 5.66944 10.0823C5.61326 10.1617 5.67081 10.2741 5.76805 10.2741H7.66397V11.7713H5.74615C5.23107 11.7713 4.75436 11.4796 4.52419 11.0124C4.40502 10.7782 4.35844 10.5207 4.38585 10.2686C4.3927 10.1932 4.33652 10.122 4.25981 10.122H0.385802C0.320024 10.122 0.266602 10.1754 0.266602 10.2412V10.3207C0.266602 12.7919 2.26252 14.7947 4.72559 14.7947H11.675C12.9776 14.7947 13.7173 13.6076 14.4444 12.4408C14.647 12.1156 14.8487 11.7919 15.0613 11.496C15.4435 10.9645 16.3627 10.5426 16.6312 10.4275C16.6751 10.4083 16.7052 10.3645 16.7052 10.3152ZM1.30241 8.35753L1.24487 8.44794C1.1942 8.52604 1.25035 8.63016 1.34623 8.63016H4.91332C4.95305 8.63016 4.99003 8.61096 5.01195 8.5781C5.05853 8.50687 5.10235 8.43288 5.14208 8.35753C5.45031 7.83973 5.72426 7.27943 5.82426 6.86574C6.05851 5.86026 5.55852 4.24518 4.97907 2.94651C4.94073 2.86023 4.82153 2.85199 4.77086 2.93146L1.30241 8.35753Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className=" bg-[#2F68FF] cursor-pointer shadow-icons transition duration-500  shadow-blue-500/200 rounded-full w-[26px] h-[26px] flex justify-center items-center px-1 py-1.5">
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
            </div>
          </div>
        </div>
      ) : (
        <Mobile />
      )}
    </>
  );
}

function Mobile() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-full h-full bg-herobg  py-2.5 px-5 shadow-heroshadow">
        <div>
          <img src={require("../../assets/mainpage/small-min.png")} alt="" />
        </div>
        {opened ? (
          <div>
            <svg
              className="cursor-pointer"
              onClick={() => setOpened(!opened)}
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.70711 19.0208C5.31658 19.4113 5.31658 20.0445 5.70711 20.435C6.09763 20.8256 6.7308 20.8256 7.12132 20.435L12.5 15.0563L18.0208 20.5772C18.4113 20.9677 19.0445 20.9677 19.435 20.5772C19.8256 20.1866 19.8256 19.5535 19.435 19.163L13.9142 13.6421L19.8492 7.70711C20.2398 7.31658 20.2398 6.68342 19.8492 6.29289C19.4587 5.90237 18.8256 5.90237 18.435 6.29289L12.5 12.2279L6.70711 6.43503C6.31658 6.0445 5.68342 6.0445 5.29289 6.43503C4.90237 6.82555 4.90237 7.45872 5.29289 7.84924L11.0858 13.6421L5.70711 19.0208Z"
                fill="white"
              />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              className="cursor-pointer"
              onClick={() => setOpened(!opened)}
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H22C22.5523 9 23 8.55228 23 8C23 7.44772 22.5523 7 22 7H4ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H4Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      {opened && <MobileHero />}
    </>
  );
}

export { Navbar, Mobile };
