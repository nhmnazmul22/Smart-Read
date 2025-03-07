"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PostSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/blogs/technology/1" className="slider-overlay rounded-xl">
            <Image
              src="/slide-img.jpg"
              width={1024}
              height={1024}
              alt="slide-img"
              className="rounded-xl w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full z-10 mb-10">
              <p className="flex gap-1 items-center bg-white text-black px-3 py-2 rounded-md group hover:bg-[#5e17eb] hover:text-white duration-150 text-base">
                <FaHashtag className="text-[#5e17eb] group-hover:text-white" />{" "}
                <span>Technology</span>
              </p>
              <h1 className="max-w-[80%] mx-auto text-2xl md:text-3xl text-white hover:underline duration-150 font-semibold">
                The Intersection Of Smartphone Technology And Music Appreciation
              </h1>
              <p className="text-[12px] text-white font-normal opacity-85">
                Sora Blogging Tips - March 17, 2017
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/blogs/technology/1" className="slider-overlay rounded-xl">
            <Image
              src="/slide-img.jpg"
              width={1024}
              height={1024}
              alt="slide-img"
              className="z-[2] rounded-xl w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full z-10 mb-10">
              <p className="flex gap-1 items-center bg-white text-black px-3 py-2 rounded-md group hover:bg-[#5e17eb] hover:text-white duration-150 text-base">
                <FaHashtag className="text-[#5e17eb] group-hover:text-white" />{" "}
                <span>Technology</span>
              </p>
              <h1 className="max-w-[80%] mx-auto text-2xl md:text-3xl text-white hover:underline duration-150 font-semibold">
                The Intersection Of Smartphone Technology And Music Appreciation
              </h1>
              <p className="text-[12px] text-white font-normal opacity-85">
                Sora Blogging Tips - March 17, 2017
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/blogs/technology/1" className="slider-overlay rounded-xl">
            <Image
              src="/slide-img.jpg"
              width={1024}
              height={1024}
              alt="slide-img"
              className="z-[2] rounded-xl w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 items-center justify-center w-full z-10 mb-10">
              <p className="flex gap-1 items-center bg-white text-black px-3 py-2 rounded-md group hover:bg-[#5e17eb] hover:text-white duration-150 text-base">
                <FaHashtag className="text-[#5e17eb] group-hover:text-white" />{" "}
                <span>Technology</span>
              </p>
              <h1 className="max-w-[80%] mx-auto text-2xl md:text-3xl text-white hover:underline duration-150 font-semibold">
                The Intersection Of Smartphone Technology And Music Appreciation
              </h1>
              <p className="text-[12px] text-white font-normal opacity-85">
                Sora Blogging Tips - March 17, 2017
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PostSlider;
