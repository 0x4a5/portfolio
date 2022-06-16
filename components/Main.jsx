import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#878883]">
            Building tomorrow, today...
          </p>
          <h1 className="py-4 text-[#878883]">
            Hi, My Name Is
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#878883] to-[#41495c]"> Michael</span>
          </h1>
          <h1 className="py-2 text-[#878883]">And I Am A</h1>
          <h1 className="py-2 text-[#878883]"> FullStack Developer</h1>
          <div>
          </div>
          <p className="py-4 text-[#878883] max-w-[70%] m-auto">
            I am a full-stack developer specializing in web, mobile and
            blockchain software solutions. I focused on providing exceptional
            customer service and building long term business relations. I offer
            both personal and multi scale business software solutions. I look
            forward to helping you build your next project.
          </p>
          {/* Selection Media Block */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/crisiscoins">
              <div className="rounded-full shadow-md shadow-[#34393f]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/">
              <div className="rounded-full shadow-md shadow-[#34393f]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:development@crisiscoins.com">
              <div className="rounded-full shadow-md shadow-[#34393f]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://calendly.com/michael-levi?hide_landing_page_details=1&hide_gdpr_banner=1">
              <div className="rounded-full shadow-md shadow-[#34393f]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsCalendarWeek />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
