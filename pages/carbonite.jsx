import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import carbonImg from "../public/carbonite.png";

const carbonite = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#34393f]/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={carbonImg}
          alt="Carbonite Image"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]
            translate-y-[-50%] text-[#f6f6f6] z-10 p-2"
        >
          <h2 className="py-2">Carbonite Search Engine</h2>
          <h3>NextJS / Tailwind / Google SearchAPI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application allows the end-user to conduct a live internet
            search. The term results are displayed for both hyperlinks and
            images. Lastly, the application provides the user the ability to
            sign in to their Google accounts through the implementation of oAuth
            2.0 open standard authentication protocol.
          </p>
          <Link href="https://carbonite-g9fujjk9l-0x4a5.vercel.app">
            <a>
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>
          </Link>
          <Link href="https://github.com/0x4a5/carbonite">
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
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-[#878883]  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next-AuthJS
              </p>
              <p className="text-[#878883] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-[#878883]  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ServerSide Rendering
              </p>
              <p className="text-[#878883]  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OAuth 2.0
              </p>
              <p className="text-[#878883]  py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GoogleSearch API
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

export default carbonite;
