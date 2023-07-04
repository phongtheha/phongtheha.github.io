import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import DownloadCV from '../resume/DownloadCV';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Scientist.", "Machine Learning Engineer.", "Software Engineer.","Fashion Enthusiast Wannabe."],
      loop: true,
      typeSpeed: 8,
      deleteSpeed: 20,
      delaySpeed: 2500,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hello everyone👋😄 </h4>
        <h1 className="text-4xl font-bold text-white">
          My name is <span className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent font-sans">Phong The Ha</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          I'm a <span className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end  bg-clip-text text-transparent font-bold">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#fc7745"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I'm a data scientist and ML Engineer with 3 years of professional experience and about 2 years of research experience"
        </p>
      </div>
     {/* Media */}
     <Media />
     <DownloadCV />
    </div>
  );
}

export default LeftBanner