import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";
import Media from '../banner/Media';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Let's Connect!!</h3>
        {/* <p className="text-lg font-normal text-gray-400">
          Data Scientist
        </p> */}
        <p> </p>
        <p className="text-base text-gray-400 tracking-wide">
          If you have any questions or simply want to say hi, please feel free to reach out! (email preferred). I will respond as soon as I can 😄
        </p>
        <p> </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 267-506-4275</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">phongtheha@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/phongtheha</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Linkedin: <span className="text-lightText">https://linkedin.com/in/phongtheha</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <Media />
      </div>
    </div>
  );
}

export default ContactLeft