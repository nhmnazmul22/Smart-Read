"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoNotifications } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const removeSearchText = () => {
    setSearchText("");
  };

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("-translate-x-full")) {
      sidebar.classList.remove("-translate-x-full");
    }
  };

  return (
    <nav className="bg-white p-5 flex justify-between items-center border-b border-slate-300">
      <div className="block md:hidden" onClick={showSidebar}>
        <IoMenu className="text-3xl cursor-pointer" />
      </div>
      <div className="search-box ml-5 lg:ml-20">
        <div className="input-box bg-slate-100 border border-slate-200 rounded-full w-[250px] lg:w-[400px] h-[40px] flex gap-2 items-center">
          <label htmlFor="search">
            <CiSearch className="text-lg ml-4 cursor-pointer" />
          </label>
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="h-full w-[80%] bg-transparent outline-none"
            value={searchText}
            onChange={handleSearchText}
          />
          {searchText && (
            <span
              onClick={removeSearchText}
              className="p-2 hover:bg-slate-300 rounded-full w-[30px] h-[30px] mr-2 flex justify-center items-center cursor-pointer"
            >
              <RxCross2 className="text-lg" />
            </span>
          )}
        </div>
      </div>
      <div className="nav-content-box me-5 lg:me-20 hidden sm:flex gap-3 items-center">
        <div className="notification relative">
          <IoNotifications className="text-3xl cursor-pointer" />
          <div className="absolute top-0 right-0 bg-red-500 text-white w-[14px] h-[14px] rounded-full text-[10px] flex justify-center items-center">
            3
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/avatar.png"
            alt="User Img"
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="user-info">
            <h4 className="text-base text-black leading-[1rem]">Jon Deo</h4>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
