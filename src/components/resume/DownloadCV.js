import React from 'react'
export default function DownloadCV() {

  const classNames = `$w-auto sm:w-full max-w-xs font-bold rounded-2xl border-2 bg:black text-center hover:bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end active:opacity-75 hover:text-bodyColor cursor-pointer py-3 px-4`
  return (
    <a id='downloadCV' target="_blank" rel="noopener noreferrer" className={classNames} href="https://drive.google.com/file/d/1wgC6-rAqHd-R5OyTM0b-eXEMWLAMgC4L/view?usp=sharing">
      {"Download my CV"}
    </a>
  );
}