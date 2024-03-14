"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-col-1 sm:grid-cols-12 p-4 mt-24">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-red mb-6  text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Baba Hussain",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "MERN Stack",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  lg:text-xl sm:text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            facere distinctio voluptatum minima quasi eos consectetur quidem
            laboriosam, similique omnis, cumque ab voluptates aut voluptate
            nulla veritatis vel quis quo.
          </p>
          <div className="flex  mt-4">
            <button className="text-xs md:text-lg py-2 px-4 sm:w-fit w-full rounded-full mr-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className=" text-xs md:text-lg py-1 px-1 sm:w-fit w-full rounded-full mr-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 hover:text-black ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-1 ">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full w-[300px] h-[300px] relative  bg-[#181818]">
            <Image
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-img.png"
              width={300}
              height={300}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
