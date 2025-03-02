import Image from "next/image";
import Link from "next/link";

const SidebarPost = ({ className }) => {
  return (
    <Link
      href="/"
      className="flex sm:flex justify-start items-start gap-3 border-b-[1px] last:border-0 border-slate-100 pb-2"
    >
      <Image
        src="/blog-img.jpg"
        alt="blog-img"
        width={80}
        height={80}
        className="rounded max-w-[80px] hover:opacity-80 duration-200"
      />
      <div className="">
        <h3
          className={`text-black font-normal  hover:text-[#5e17eb] duration-200 ${
            className ? className : "text-sm"
          }`}
        >
          Empowering Healthcare Industry: How Virtual Reality Drives Business
          Progress
        </h3>
        <p className="text-gray-400 text-[12px]">-February 25, 2023</p>
      </div>
    </Link>
  );
};

export default SidebarPost;
