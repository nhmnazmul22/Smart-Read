"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLogout, MdSpaceDashboard } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="mt-10 w-full flex flex-col gap-2 px-5">
      <li
        className={`py-3 pl-10  hover:bg-gray-800 hover:text-white duration-150 group cursor-pointer rounded-lg ${
          pathname === "/dashboard" && "bg-[#5e17eb] text-white"
        }`}
      >
        <Link
          href="/dashboard"
          className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center"
        >
          <MdSpaceDashboard className="text-2xl" />
          Dashboard
        </Link>
      </li>
      <li
        className={`py-3 pl-10 hover:text-white hover:bg-gray-800 duration-200 group cursor-pointer rounded-lg ${
          pathname === "/dashboard/blogs" && "bg-[#5e17eb] text-white"
        }`}
      >
        <Link
          href="/dashboard/blogs"
          className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center"
        >
          <SiGoogledocs className="text-2xl" />
          Blogs
        </Link>
      </li>
      <li
        className={`py-3 pl-10 hover:text-white hover:bg-gray-800 duration-200 group cursor-pointer rounded-lg ${
          pathname === "/dashboard/users" && "bg-[#5e17eb] text-white"
        }`}
      >
        <Link
          href="/dashboard/users"
          className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center"
        >
          <FaUserCircle className="text-2xl" />
          Users
        </Link>
      </li>
      <li
        className={`py-3 pl-10 hover:text-white hover:bg-gray-800 duration-200 group cursor-pointer rounded-lg ${
          pathname === "/dashboard/inbox" && "bg-[#5e17eb] text-white"
        }`}
      >
        <Link
          href="/dashboard/inbox"
          className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center"
        >
          <AiFillMessage className="text-2xl" />
          Inbox
        </Link>
      </li>
      <hr className="h-[2px] bg-slate-200" />
      <li
        className={`py-3 pl-10 hover:text-white hover:bg-gray-800 duration-200 group cursor-pointer rounded-lg ${
          pathname === "/dashboard/setting" && "bg-[#5e17eb] text-white"
        }`}
      >
        <Link
          href="/dashboard/setting"
          className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center"
        >
          <IoMdSettings className="text-2xl" />
          Setting
        </Link>
      </li>
      <li
        className={`py-3 pl-10 hover:text-white hover:bg-gray-800 duration-200 group cursor-pointer rounded-lg ${
          pathname === "/dashboard/setting" && "bg-[#5e17eb] text-white"
        }`}
      >
        <button className="text-lg text-medium group-hover:ml-2 duration-300 flex gap-2 items-center">
          <MdLogout className="text-2xl" />
          Logout
        </button>
      </li>
    </ul>
  );
};

export default SidebarMenu;
