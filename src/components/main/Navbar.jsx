import React from "react";
import logo from "../../assets/mainpage/logo.png";
import { NavLink } from "react-router-dom";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
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
    <div className="bg-slate-900">
      <div className="xl-container mx-auto px-12 py-6 flex justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="text-white flex justify-between mt-1">
          {links.map((item) => (
            <li key={item.id} className="mr-8 uppercase font-bold text-sm ">
              <NavLink className="decoration-white" to={item.url}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-between space-x-4">
          <div className="rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-xl shadow-[#2F68FF] w-7 h-7 flex justify-center items-center p-1.5">
            <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
              <SiDiscord className="text-white " />
            </a>
          </div>
          <div className="rounded-full cursor-pointer bg-[#2F68FF] hover:bg-[#214fcf] transition duration-200 shadow-xl shadow-[#2F68FF] w-7 h-7 flex justify-center items-center p-1.5">
            <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
              <FaTwitter className="text-white text-lg" />
            </a>
          </div>
          <div className=" bg-[#2F68FF] cursor-pointer hover:bg-[#214fcf] shadow-xl shadow-[#2F68FF]  transition duration-200 shadow-lg shadow-blue-500/200 rounded-full  w-7 h-7 flex justify-center items-center p-1.5">
            <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
              <FaTwitter className="text-white text-lg" />
            </a>
          </div>
          <div className=" bg-[#2F68FF] cursor-pointer hover:bg-[#214fcf] shadow-xl shadow-[#2F68FF]  transition duration-200 shadow-lg shadow-blue-500/200 rounded-full w-7 h-7 flex justify-center items-center p-1.5">
            <a href="https://t.me/Sulaymon_Abdukarimov" target="_blank">
              <FaRegNewspaper className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
