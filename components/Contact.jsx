import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#41495c]">
          Contact
        </p>
        <h2 className="py-4">Lets Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Page Block */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-[#34393f]/40 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
              <Image className="rounded-3xl"
                    src="/email.png"
                    layout="responsive"
                    width={100} 
                    height={100} 
                    alt="Email Image"
                  />
              </div>
              <div>
                <h2 className="py-2">Michael Levi</h2>
                <p>FullStack Developer</p>
                <p className="py-4">
                  Contact me and lets chat how I can help you with your next project.
                </p>
              </div>
              {/* Social Media Block */}
              <div>
                <p className="uppercase pt-8">Lets Connect on</p>
                <div className="flex items-center justify-between py-4">
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
          <div className="col-span-3 w-full h-auto shadow-md shadow-[#34393f]/40 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/1a805747-dfc1-4dfd-a49e-cfa1c7aabfa1"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 border-gray-300 bg-[#fff]
                                    h-10 px-5 pr-16 rounded-lg text-sm"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input
                      className="border-2 border-gray-300 bg-[#fff]
                                    h-10 px-5 pr-16 rounded-lg text-sm"
                      type="text"
                      id="number"
                      name="phone"
                      max="10"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 border-gray-300 bg-[#fff] 
                                    h-10 px-5 pr-16 rounded-lg text-sm"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 border-gray-300 bg-[#fff]
                                    h-10 px-5 pr-16 rounded-lg text-sm"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg border-gray-300 p-3"
                    rows="10"
                    placeholder="Message"
                    required
                  >
                    {" "}
                  </textarea>{" "}
                </div>

                <button className="w-full p-4 text[#41495c] mt-4" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-[#34393f]/40 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#41495c]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
