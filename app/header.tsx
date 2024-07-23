"use client";

import { CiMenuFries } from "react-icons/ci";
export default function Header(){
  return(
    <div className="flex justify-between items-center bg-primary px-12 xl:px-24 py-4 h-12">
      <h1>Hadyan Abdul Aziz</h1>
      {/* desktop nav */}
      <div className="hidden xl:flex xl:flex-row xl:items-center xl:gap-x-4">
        <h3>About</h3>
        <h3>Skills</h3>
        <h3>Experience</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
        <div className="flex justify-center items-center border border-blue rounded px-2 py-1 hover:bg-blue/20 hover:cursor-pointer">
          <p className="text-blue">Resume</p>
        </div>
      </div>
      {/* mobile nav */}
      <div className="xl:hidden">
        <CiMenuFries className="text-[32px]" />
      </div>
    </div>
  );
}