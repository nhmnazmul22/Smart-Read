import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./Navbar/MobileMenu";
import SearchForm from "./Navbar/SearchForm";

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-md sticky">
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
              <li className="menu-items flex items-center gap-2 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-items">
                <Link href="/">Popular Post</Link>
              </li>
              <li className="menu-items">
                <Link href="/">Posts</Link>
              </li>
              <li className="menu-items">
                <Link href="/">About Us</Link>
              </li>
              <li className="menu-items">
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
