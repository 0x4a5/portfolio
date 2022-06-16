import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#41495c]">
            About
          </p>
          <h2 className="py-4 ">Who Am I</h2>
          <p className="py-2 text-[#878883]">
            I hold dual M.S. Degrees in Information Technology and have spent
            the last 20 years in the IT Field working as a professional
            enterprise engineer and working in other various IT positions. I
            have always had a passion for development, especially the creativity
            aspect and its final result. In 2019 Covid changed the world, and I
            utilized this time to submerse myself into fine tunning my HTML &
            CSS skills in order to use them within my startup business. In
            actuality the fine tuning has now become a new found passion and
            love for Fullstack development.
          </p>
          <p className="py-2 text-[#878883]">
            Captivated by the unbounded creativity programming allow you to
            implement, I was instantly attracted and wanted to learn more. I
            started taking courses and building on previously acquired knowledge
            by learning javascript and was even more fascinated with developing
            websites interactive. I started doing freelancing with focus on Fullstack, 
            Blockchain and mobile development applications.
            I am now spending my time building projects with Next JS, React JS,
            Firebase, and am constantly learning new technologies.
          </p>
          <p className="py-2 text-[#878883] underline cursor-pointer">
            Here are my projects...
          </p>
        </div>
        <div className="w-full h-auto m-auto bg-[#f6f6f6] text-center rounded-3xl border border-[#878883]/70
            shadow-md shadow-[#34393f]/40 p-10 max-w-xs hover:scale-105 ease-in duration-300">
           <Image className="mb-3 w-32 h-32 rounded-full border mx-auto"
                  src="/designer.png"
                  width={100}
                  height={100}
                  alt="Michael Levi"
                />
          <h1 className="text-lg text-[#34393f]"> Michael Levi </h1>
          <h3 className="text-sm text-[#878883]"> FullStack Developer </h3>
          <p className="text-xs text-[#878883] mt-4">
            Well-qualified Certified Full Stack Developer familiar with wide
            range of programming utilities and languages. Knowledgeable of
            backend and frontend development requirements. Handles any part of
            process with ease. Collaborative team player with excellent
            technical abilities offering 19 years of related experience.
          </p>
          <Link href="mailto:development@crisiscoins.com">
            <button
              className="border border-[#41495c] shadow-md shadow-[#34393f]/40 
                        text-[#878883] mt-8 hover:scale-110 ease-in transition duration-300 cursor-pointer"
            >
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
