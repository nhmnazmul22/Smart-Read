"use client";
import Link from "next/link";
import { useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";

const MobileMenu = () => {
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
          <li className="mobile-menu-items">
            <Link href="/">Home</Link>
          </li>
          <li className="mobile-menu-items">
            <Link href="/">Popular Post</Link>
          </li>
          <li className="mobile-menu-items">
            <Link href="/">Posts</Link>
          </li>
          <li className="mobile-menu-items">
            <Link href="/">About Us</Link>
          </li>
          <li className="mobile-menu-items">
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
