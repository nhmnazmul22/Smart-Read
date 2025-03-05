import Image from "next/image";
import Link from "next/link";

const RelatedPost = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <Link href="/" className="group w-full">
        <Image
          src="/post.png"
          alt="Post png"
          width={1024}
          height={1024}
          className="w-full h-[150px] object-cover object-center rounded  group-hover:opacity-90"
        />
        <p className="text-base text-medium mt-2 group-hover:text-[#5e17eb] duration-150">
          Empowering Healthcare Industry: How Virtual Reality Drives Business
          Progress
        </p>
      </Link>
      <p className="text-[12px] text-gray-400 mt-1">- February 25, 2023</p>
    </div>
  );
};

export default RelatedPost;
