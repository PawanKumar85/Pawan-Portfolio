import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function App() {
  return (
    <footer className="bg-[#04152d] text-center text-white dark:bg-[#04152d]">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <IoLogoLinkedin size={30} />
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <IoLogoGithub size={30} />
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <SiMinutemailer size={30} />
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <FaFacebook size={30} />
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <RiInstagramFill size={30} />
          </a>
          <a className="text-neutral-800 dark:text-neutral-200">
            <FaSquareXTwitter size={30} />
          </a>
        </div>
      </div>
      <div className="p-1 m-3 text-center text-[#fff] dark:bg-white-50 dark:text-neutral-200">
        Version : 1.0.5
      </div>
    </footer>
  );
}
