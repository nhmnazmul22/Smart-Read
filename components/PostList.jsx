import Image from "next/image";
import Link from "next/link";
import { FaHashtag, FaRegUserCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const PostList = () => {
  return (
    <div className="col-span-12 shadow-md mb-5 md:mb-0 p-5 rounded-xl bg-white">
      <div className="flex flex-col md:flex-row">
        <Link href="/" className="min-w-[300px]">
          <Image
            src="/post.png"
            width={3400}
            height={3400}
            alt="post img"
            className="w-full h-[250px] object-cover object-center rounded-xl hover:opacity-80 duration-200"
          />
        </Link>
        <div className="bg-white px-5 py-3 rounded-b-xl">
          <Link
            href="/"
            className="flex gap-2 justify-center items-center bg-[#eff1f4] px-3 py-2 w-[130px] text-black text-sm"
          >
            <FaHashtag className="text-[#5e17eb] text-xl" />
            <span>Technology</span>
          </Link>
          <h2
            href="/"
            className="mt-3 mb-2 text-2xl sm:text-3xl font-semibold hover:text-[#5e17eb] cursor-pointer"
          >
            <Link href="/">
              Empowering Healthcare Industry: How Virtual Reality
            </Link>
          </h2>
          <p className="text-base text-gray-600 mt-3">
            It bachelor cheerful of mistaken. Tore has sons put upon wife use
            bred seen. Its dissimilar invitation ten has discreti…
          </p>
          <div className="border-t-[1px] border-gray-200 mt-5 pt-2 flex justify-between items-center text-[12px] text-gray-500">
            <p className="flex gap-1 items-center">
              <FaRegUserCircle /> <span>Smart Read</span>
            </p>
            <p className="flex gap-1 items-center">
              <MdAccessTime /> <span>February 25, 2023</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
