import Image from "next/image";
import Link from "next/link";
import SidebarPost from "./Sidebar/SidebarPost";

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="random-post w-full lg:w-auto">
            <p className="text-lg font-bold mb-3 border-b-2 border-slate-200 relative">
              <span className="after-footer-title">Random Post</span>
            </p>
            <SidebarPost className="text-base" />
            <SidebarPost className="text-base" />
            <SidebarPost className="text-base" />
          </div>
          <div className="random-post w-full lg:w-[60%]">
            <p className="text-lg font-bold mb-3 border-b-2 border-slate-200 relative">
              <span className="after-footer-title">Featured post</span>
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <Image
                  src="/post-img.jpg"
                  alt="featured post"
                  width={400}
                  height={400}
                  className="w-full h-[200px] lg:h-[170px] object-cover object-top"
                />
              </Link>
              <div>
                <h3 className="text-black font-semibold text-xl hover:text-[#5e17eb] hover:underline cursor-pointer ">
                  Empowering Healthcare Industry: How Virtual Reality Drives
                  Business Progress
                </h3>
                <p className="text-gray-400 text-[12px]">
                  Smart Read- March 17, 2017
                </p>
              </div>
            </div>
          </div>
          <div className="random-post w-full lg:w-auto">
            <p className="text-lg font-bold mb-3 border-b-2 border-slate-200 relative">
              <span className="after-footer-title">Most Popular</span>
            </p>
            <SidebarPost className="text-base" />
            <SidebarPost className="text-base" />
            <SidebarPost className="text-base" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 pb-5 text-[12px] font-medium">
          <Link href="/">
            Crafted with ❤ by
            <span className="text-[#5e17eb] ms-1">Nhm Develop Solution</span>
          </Link>
          <ul className="flex gap-3 uppercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
