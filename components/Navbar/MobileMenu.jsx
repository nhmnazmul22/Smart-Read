"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";

const MobileMenu = () => {
  const pathname = usePathname();
  const menuItemsRef = useRef(null);

  const handleMobileMenu = () => {
    if (menuItemsRef.current.classList.contains("right-[-300px]")) {
      menuItemsRef.current.classList.remove("right-[-300px]");
      menuItemsRef.current.classList.add("right-0");
    } else {
      menuItemsRef.current.classList.add("right-[-300px]");
      menuItemsRef.current.classList.remove("right-0");
    }
  };

  return (
    <div className="block md:hidden align-middle">
      <div className="relative">
        <button onClick={handleMobileMenu}>
          <IoMenuOutline className="text-2xl cursor-pointer" />
        </button>
        <ul
          ref={menuItemsRef}
          className="flex flex-col gap-2 justify-start items-center w-[200px] bg-white absolute top-[60px] right-[-300px] shadow-lg py-5 px-3 duration-300"
        >
          <li
            className={`mobile-menu-items ${
              pathname === "/" && "bg-[#5e17eb] text-white"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`mobile-menu-items ${
              pathname === "/blogs" && "bg-[#5e17eb] text-white"
            }`}
          >
            <Link href="/blogs">Blogs</Link>
          </li>
          <li
            className={`mobile-menu-items ${
              pathname === "/popular-blogs" && "bg-[#5e17eb] text-white"
            }`}
          >
            <Link href="/popular-blogs">Popular Blogs</Link>
          </li>
          <li
            className={`mobile-menu-items ${
              pathname === "/about" && "bg-[#5e17eb] text-white"
            }`}
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            className={`mobile-menu-items ${
              pathname === "/contact" && "bg-[#5e17eb] text-white"
            }`}
          >
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
