"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./Navbar/MobileMenu";
import SearchForm from "./Navbar/SearchForm";

const Navbar = () => {
  const pathname = usePathname();


  return (
    <nav className=" bg-white shadow-md sticky top-0 z-[9999]">
      <div className="container">
        <div className="flex-between h-[80px]">
          <Link href="/">
            <Image
              src="/logo-smart-read.png"
              alt="logo-smart-read"
              width={150}
              height={60}
              className="w-[120px] h-[50px] sm:w-[150px] sm:h-[60px]"
            />
          </Link>
          <div className="flex justify-end items-center gap-3 lg:gap-10">
            <ul className="hidden md:flex gap-5 justify-start items-center">
              <li
                className={`menu-items ${
                  pathname === "/" && "bg-[#5e17eb] text-white"
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`menu-items ${
                  pathname === "/blogs" && "bg-[#5e17eb] text-white"
                }`}
              >
                <Link href="/blogs">Blogs</Link>
              </li>
              <li
                className={`menu-items ${
                  pathname === "/popular-blogs" && "bg-[#5e17eb] text-white"
                }`}
              >
                <Link href="/">Popular Blogs</Link>
              </li>
              <li
                className={`menu-items ${
                  pathname === "/about-us" && "bg-[#5e17eb] text-white"
                }`}
              >
                <Link href="/">About Us</Link>
              </li>
              <li
                className={`menu-items ${
                  pathname === "/contact-us" && "bg-[#5e17eb] text-white"
                }`}
              >
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
            <SearchForm />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
