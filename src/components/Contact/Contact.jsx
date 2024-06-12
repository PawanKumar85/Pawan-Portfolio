import React from "react";
import "./Contact.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
const Contact = () => {
  return (
    <section className="contact mt-[100px]" id="contact">
      <div className="content">
        <h2>Contact Me</h2>
        <p>
          Get in touch with me for any questions, collaborations, or just to say
          hi
        </p>
      </div>
      <div className="container p-4">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <b></b>
              <FaMapLocationDot className="text-3xl m-4" />
            </div>
            <div className="text">
              <h3 className="fw-bolder">Address</h3>
              <p>
                Mandhana Kanpur <br /> Uttar Pradesh 209217
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <b></b>
              <MdOutlinePhoneInTalk className="text-3xl m-4" />
            </div>
            <div className="text">
              <h3 className="fw-bolder">Phone</h3>
              <p>+91 830-33-85440</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <b></b>
              <SiMinutemailer className="text-3xl m-4" />
            </div>
            <div className="text">
              <h3 className="fw-bold">Email</h3>
              <p>
                pawan630703@gmail.com <br />
                pawan.laterl2k22@mpgi.edu.in
              </p>
            </div>
          </div>

          <h2>Avaliable on</h2>
          <ul className="flex space-x-5">
            <li>
              <FaLinkedinIn className="text-2xl"/>
            </li>
            <li>
              <BsTwitterX className="text-2xl"/>
            </li>
            <li>
              <IoLogoInstagram className="text-2xl"/>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required plac />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
