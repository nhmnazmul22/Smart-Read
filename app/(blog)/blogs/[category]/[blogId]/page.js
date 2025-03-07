import RelatedPost from "@/components/RelatedPost";
import Tags from "@/components/Sidebar/Tags";
import { tags } from "@/db/tag";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Page = async ({ params }) => {
  const { category, blogId } = await params;

  console.log(category, blogId);
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg col-span-12 min-h-screen">
      <p className="text-[12px] text-gray-400">
        {
          "Blogs > Health > The Intersection Of Smartphone Technology And Music Appreciation"
        }
      </p>
      <div className="my-3">
        <h1 className="text-3xl md:text-4xl font-medium mt-5 md:!leading-[3rem]">
          The Intersection Of Smartphone Technology And Music Appreciation
          Technology And Music Appreciation
        </h1>
        <p className="text-[12px] text-gray-400 mt-3">
          Smart Blog - March 17, 2017
        </p>
      </div>
      {/* Responsive Ads */}
      <div className="bg-[#eee] h-[100px] border border-slate-300 rounded flex justify-center items-center w-full">
        <p className="text-center text-slate-500">Responsive Ads Banner</p>
      </div>
      {/* Responsive Ads */}
      <div className="mt-5 relative w-full h-[500px]">
        <Image
          src="/image.png"
          alt="post img"
          priority
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="blog-content flex flex-col gap-5 text-gray-800 mt-10 text-lg">
        <p className="text-gray-700 leading-relaxed">
          Tailwind CSS is a utility-first CSS framework that enables developers
          to build modern and responsive UI components quickly. With its
          low-level utility classes, you can style your application directly in
          the markup without writing custom CSS.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Why Use Tailwind CSS?
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Highly customizable with a configuration file</li>
          <li>Faster development with pre-built utility classes</li>
          <li>Responsive design out of the box</li>
          <li>Minimal custom CSS required</li>
        </ul>
        {/* Responsive Ads */}
        <div className="bg-[#eee] h-[100px] border border-slate-300 rounded flex justify-center items-center w-full">
          <p className="text-center text-slate-500">Responsive Ads Banner</p>
        </div>
        {/* Responsive Ads */}
        <p className="text-gray-700 mt-4">
          {`Whether you're a beginner or an experienced developer, Tailwind CSS
          can significantly boost your development workflow. Try it out today
          and see the difference!`}
        </p>
        <p>
          It bachelor cheerful of mistaken. Tore has sons put upon wife use bred
          seen. Its dissimilar invitation ten has discretion unreserved. Had you
          him humoured jointure ask expenses learning. Blush on in jokes sense
          do do.
        </p>
        <p>
          It bachelor cheerful of mistaken. Tore has sons put upon wife use bred
          seen. Its dissimilar invitation ten has discretion unreserved. Had you
          him humoured jointure ask expenses learning. Blush on in jokes sense
          do do.
        </p>
        <p>
          It bachelor cheerful of mistaken. Tore has sons put upon wife use bred
          seen. Its dissimilar invitation ten has discretion unreserved. Had you
          him humoured jointure ask expenses learning. Blush on in jokes sense
          do do.
        </p>
        <p>
          Introduced imprudence see say unpleasing devonshire acceptance son.
          Exeter longer wisdom gay nor design age. Am weather to entered norland
          no in showing service. Ability thought enquire settled prudent you
          sir. It if sometimes furnished unwilling as additions so. Blessing
          resolved peculiar fat graceful ham. Sussex on at really ladies in as
          elinor. Sir sex opinions age properly extended. Advice branch vanity
          or do thirty living. Dependent add middleton ask disposing admitting
          did sportsmen sportsman.
        </p>
        <ul className="list-disc ml-8">
          <li>Assistance imprudence yet sentiments</li>
          <li>
            Miss told ham dull knew see she spot near can spirit her entire
          </li>
          <li>Drawings offended yet answered.</li>
        </ul>
        {/* Responsive Ads */}
        <div className="bg-[#eee] h-[100px] border border-slate-300 rounded flex justify-center items-center w-full">
          <p className="text-center text-slate-500">Responsive Ads Banner</p>
        </div>
        {/* Responsive Ads */}
      </div>
      <div className="flex justify-start items-start gap-2 flex-wrap mt-3">
        {tags.length > 0 ? (
          tags.map((tag) => <Tags key={tag.id} tag={tag} />)
        ) : (
          <p>No Tags Found!!</p>
        )}
      </div>
      <div className="mt-10 flex justify-start items-start gap-2 flex-wrap">
        <Link
          href="/"
          className="bg-[#3b5999] hover:opacity-90 duration-150 px-14 py-2 rounded"
        >
          <FaFacebook className="text-white text-lg" />
        </Link>
        <Link
          href="/"
          className="bg-black hover:opacity-90 duration-150 px-14 py-2 rounded"
        >
          <BsTwitterX className="text-white text-lg" />
        </Link>
        <Link
          href="/"
          className="bg-[#ca2127] hover:opacity-90 duration-150 px-14 py-2 rounded"
        >
          <FaPinterest className="text-white text-lg" />
        </Link>
        <Link
          href="/"
          className="bg-[#0077b5] hover:opacity-90 duration-150 px-14 py-2 rounded"
        >
          <FaLinkedinIn className="text-white text-lg" />
        </Link>
        <Link
          href="/"
          className="bg-[#3fbb50] hover:opacity-90 duration-150 px-14 py-2 rounded"
        >
          <FaWhatsapp className="text-white text-lg" />
        </Link>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="flex gap-1 items-center text-gray-400 text-sm">
            <MdKeyboardArrowLeft /> <span>Previous</span>
          </p>
          <Link
            href="/"
            className="text-gray-400 hover:text-[#5e17eb] duration-100 text-[12px] cursor-pointer"
          >
            Empowering Healthcare Industry: How Virtual Reality Drives Business
            Progress
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <p className="flex gap-1 items-center text-gray-400 text-sm">
            <span>Next</span> <MdOutlineKeyboardArrowRight />
          </p>
          <Link
            href="/"
            className="text-gray-400 hover:text-[#5e17eb] duration-100 text-[12px] cursor-pointer"
          >
            Empowering Healthcare Industry: How Virtual Reality Drives Business
            Progress
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm font-semibold">Related Posts</p>
        <div className="grid grid-cols-12 gap-8 mt-3">
          <RelatedPost />
          <RelatedPost />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Page;
