import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import trackerImg from "../public/tracker.png";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#34393f]/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={trackerImg}
          alt="/"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]
          translate-y-[-50%] text-[#f6f6f6] z-10 p-2"
        >
          <h2 className="py-2">Crypto Price LiveFeed</h2>
          <h3>ReactJS / Tailwind / Coin Gecko API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application allows the end-user to conduct a live search for
            any token of choice. The results display the coins data including
            the name, its current token price as well as its market cap and 24h
            volume. Lastly, the application displays conditional token data such
            that it will display a “green color block and an up arrow” for any
            currency that increases in value and a “red color block and a down
            arrow” for any currency that has lost some of its value in the
            market.
          </p>
          <Link href="https://0x4a5.github.io/tokentracker/">
            <a>
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>
          </Link>
          <Link href="https://github.com/0x4a5/tokentracker">
            <a>
              <button className="px-8 py-2 mt-4">Code</button>
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-[#34393f]/40 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Routing
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Coin Gecko API
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
