"use client";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar.classList.contains("-translate-x-full")) {
      sidebar.classList.add("-translate-x-full");
    }
  };

  return (
    <div
      className="sidebar w-[240px] bg-white border border-slate-200 h-screen py-7 absolute top-0 left-0 -translate-x-full duration-300
 md:relative md:opacity-100 md:transform-none"
    >
      <span
        onClick={closeSidebar}
        className="absolute right-[2px] top-[2px] p-2 hover:bg-slate-300 rounded-full mr-2 flex justify-center items-center cursor-pointer md:hidden"
      >
        <RxCross2 className="text-xl" />
      </span>

      <Link
        href="/dashboard"
        className="w-full flex justify-center items-center"
      >
        <Image
          src="/logo-smart-read.png"
          alt="Logo"
          width={240}
          height={200}
          className="w-36 h-auto"
        />
      </Link>
      <div className="flex justify-center items-center">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
